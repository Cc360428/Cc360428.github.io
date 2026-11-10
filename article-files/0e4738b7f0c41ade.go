package systemlab

import (
	"context"
	"errors"
	"reflect"
	"sync/atomic"
	"testing"
	"time"
)

func waitResult(t *testing.T, done <-chan error) error {
	t.Helper()
	select {
	case err := <-done:
		return err
	case <-time.After(5 * time.Second):
		t.Fatal("workers did not stop")
		return nil
	}
}

func TestRunOrderAndValidation(t *testing.T) {
	input := []int{3, 1, 2}
	got, err := Run(context.Background(), 2, input, func(_ context.Context, n int) (int, error) { return n * n, nil })
	if err != nil || !reflect.DeepEqual(got, []int{9, 1, 4}) {
		t.Fatalf("%v %v", got, err)
	}
	if !reflect.DeepEqual(input, []int{3, 1, 2}) {
		t.Fatal("input changed")
	}
	for _, workers := range []int{0, -1, 65} {
		if _, err := Run(context.Background(), workers, input, func(context.Context, int) (int, error) { return 0, nil }); !errors.Is(err, ErrWorkers) {
			t.Fatalf("workers %d: %v", workers, err)
		}
	}
	if _, err := Run(context.Background(), 1, input, nil); !errors.Is(err, ErrWork) {
		t.Fatal(err)
	}
	got, err = Run(context.Background(), 1, nil, func(context.Context, int) (int, error) { t.Fatal("called"); return 0, nil })
	if err != nil || len(got) != 0 {
		t.Fatalf("%v %v", got, err)
	}
}

func TestRunBoundsAndJoins(t *testing.T) {
	started := make(chan struct{}, 8)
	release := make(chan struct{})
	var active, maximum atomic.Int32
	done := make(chan error, 1)
	go func() {
		_, err := Run(context.Background(), 2, []int{1, 2, 3, 4, 5, 6, 7, 8}, func(ctx context.Context, n int) (int, error) {
			now := active.Add(1)
			defer active.Add(-1)
			for old := maximum.Load(); now > old; old = maximum.Load() {
				if maximum.CompareAndSwap(old, now) {
					break
				}
			}
			started <- struct{}{}
			select {
			case <-release:
				return n, nil
			case <-ctx.Done():
				return 0, ctx.Err()
			}
		})
		done <- err
	}()
	for range 2 {
		select {
		case <-started:
		case <-time.After(5 * time.Second):
			t.Fatal("not started")
		}
	}
	close(release)
	if err := waitResult(t, done); err != nil {
		t.Fatal(err)
	}
	if maximum.Load() != 2 || active.Load() != 0 {
		t.Fatalf("max=%d active=%d", maximum.Load(), active.Load())
	}
}

func TestRunCancellationAndError(t *testing.T) {
	ctx, cancel := context.WithCancel(context.Background())
	started := make(chan struct{})
	done := make(chan error, 1)
	var active atomic.Int32
	go func() {
		_, err := Run(ctx, 1, []int{1, 2}, func(ctx context.Context, n int) (int, error) {
			active.Add(1)
			defer active.Add(-1)
			close(started)
			<-ctx.Done()
			return 0, ctx.Err()
		})
		done <- err
	}()
	select {
	case <-started:
	case <-time.After(5 * time.Second):
		t.Fatal("not started")
	}
	cancel()
	if err := waitResult(t, done); !errors.Is(err, context.Canceled) {
		t.Fatal(err)
	}
	if active.Load() != 0 {
		t.Fatal("returned before join")
	}
	called := false
	_, err := Run(ctx, 1, []int{1}, func(context.Context, int) (int, error) { called = true; return 0, nil })
	if !errors.Is(err, context.Canceled) || called {
		t.Fatalf("%v called=%v", err, called)
	}
	want := errors.New("bad input")
	otherStarted := make(chan struct{})
	go func() {
		got, err := Run(context.Background(), 2, []int{1, 2, 3}, func(ctx context.Context, n int) (int, error) {
			active.Add(1)
			defer active.Add(-1)
			if n == 1 {
				<-otherStarted
				return 0, want
			}
			close(otherStarted)
			<-ctx.Done()
			return 0, ctx.Err()
		})
		if got != nil {
			done <- errors.New("partial results escaped")
			return
		}
		done <- err
	}()
	if err := waitResult(t, done); !errors.Is(err, want) {
		t.Fatal(err)
	}
	if active.Load() != 0 {
		t.Fatal("error returned before workers stopped")
	}
}

func TestRunOrdersOutOfOrderCompletion(t *testing.T) {
	secondFinished := make(chan struct{})
	done := make(chan error, 1)
	go func() {
		got, err := Run(context.Background(), 2, []int{1, 2}, func(_ context.Context, n int) (int, error) {
			if n == 1 {
				<-secondFinished
			} else {
				close(secondFinished)
			}
			return n * 10, nil
		})
		if err == nil && !reflect.DeepEqual(got, []int{10, 20}) {
			err = errors.New("completion order changed result order")
		}
		done <- err
	}()
	if err := waitResult(t, done); err != nil {
		t.Fatal(err)
	}
}
