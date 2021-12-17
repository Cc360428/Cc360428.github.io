## gRPC

[源码](https://gitee.com/GolangCodeFile/blogcode/tree/master/other/grpc_demo)

### code
#### server

```go
package main

import (
	"context"
	"github.com/Cc360428/HelpPackage/UtilsHelp/logs"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	pd "grpc_demo/api"
	"net"
)

func main() {
	Server()
}

// 服务对象
type DemoServer struct{}

func (this *DemoServer) SendOutByClientId(context.Context, *pd.SendOutByClientIdRequest) (*pd.SendOutByClientIdResponse, error) {
	response := new(pd.SendOutByClientIdResponse)
	logs.Info("implement me")
	return response, nil
}

func (this *DemoServer) LookUpAllClusterNumber(context.Context, *pd.LookUpAllClusterNumberRequest) (*pd.LookUpAllClusterNumberResponse, error) {
	response := new(pd.LookUpAllClusterNumberResponse)
	logs.Info("implement me")
	return response, nil
}

// 实现gRPC 方法
func (this *DemoServer) LookupCluster(ctx context.Context, in *pd.LookupClusterRequest) (*pd.LookupClusterResponse, error) {
	var t pd.LookupClusterResponse
	t.ClientId = GetName("")
	return &t, nil
}

// 写业务逻辑
func GetName(codeType string) (name string) {
	name = "666"
	return name
}

var (
	ServerAddress = ":8032"
)

// server 启动服务
func Server() {
	// 当服务启动时 注册到对应的注册中心 必填项（服务器地址、服务器端口号、此服务唯一标识）
	// 也可以同时启动http服务
	lis, err := net.Listen("tcp", ServerAddress)
	if err != nil {
		logs.Info("gRPC  启动失败！", err.Error())
	}
	ser := grpc.NewServer()
	pd.RegisterGreeterServer(ser, &DemoServer{})
	reflection.Register(ser)
	logs.Info("TCP建立成功！ 等待链接 ", ServerAddress)
	if err = ser.Serve(lis); err != nil {
		logs.Info("gRPC 链接成功！")
	}

}
```

#### cilent

```go
package main

import (
	"context"
	"fmt"
	"github.com/Cc360428/HelpPackage/UtilsHelp/logs"
	"google.golang.org/grpc"
	pd "grpc_demo/api"
	"time"
)

const (
	// 这里可以使用 注册中心拉取服务器地址以及端口号
	address = "127.0.0.1:8032"
)

func main() {
	// 调用方法
	name := GetNameByCode("1")
	fmt.Println(name)
}

// GetNameByCode 调用方法
func GetNameByCode(id string) (name string) {
	// gRPC 建立链接
	conn, err := grpc.Dial(address, grpc.WithInsecure())
	if err != nil {
		logs.Error("gRPC 建立失败", err.Error())
	}
	defer conn.Close()
	c := pd.NewGreeterClient(conn)
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	var getRequest pd.LookupClusterRequest
	getRequest.Args = id
	getResponse, err := c.LookupCluster(ctx, &getRequest)
	if err != nil {
		logs.Error("gRPC", err.Error())
		return
	}
	if getResponse != nil {
		logs.Info("你调用得gRPC 服务返回值为：", getResponse.ClientId)
		return ""
	}
	return getResponse.ClientId
}
```

#### proto

```protobuf
syntax = "proto3";

package protoc;

service Greeter {
  // 1、 查找最空闲的 tcpcluster
 rpc LookupCluster(LookupClusterRequest) returns (LookupClusterResponse){}

  // 2、根据 clientid 发送数据。
    rpc SendOutByClientId(SendOutByClientIdRequest) returns (SendOutByClientIdResponse){}

  // 3、查找每个 tcpcluster 终端数
  rpc LookUpAllClusterNumber(LookUpAllClusterNumberRequest) 		returns(LookUpAllClusterNumberResponse){}

}


 // 1、 查找最空闲的 tcpcluster Request
message LookupClusterRequest{
    string args = 1;
}

 // 1、 查找最空闲的 tcpcluster Response
message LookupClusterResponse{
   string clientId = 1;
}

// 2、根据 clientid 发送数据  Request
message SendOutByClientIdRequest{
    string clientId = 1;
    string  mgs = 2;
}

// 2、根据 clientid 发送数据  Response
message SendOutByClientIdResponse{
    int64 code = 1;
}

// 3、查找每个 tcpcluster 终端数  Request
message LookUpAllClusterNumberRequest{

}

// 3、查找每个 tcpcluster 终端数  Response
message LookUpAllClusterNumberResponse{
        map<string, int64> number = 1;
}
```



### 启动方式
```go
go run server.go
go run client.go
```


### proto 
#### 依赖
```go
    go get google.golang.org/grpc
    go get -u github.com/golang/protobuf/protoc-gen-go
    go get -u github.com/golang/protobuf/
	
	go get github.com/fullstorydev/grpcui
    go install github.com/fullstorydev/grpcui/cmd/grpcui
```
#### 生成文件
```go 
    cd [进入proto文件所在位置]
    protoc -I . --go_out=plugins=grpc:. api.protoc
    protoc --java_out=:. api.proto
```

### grpcUI
```go
            webiui地址    端口号             grpc地址
grpcui -bind 0.0.0.0 -port 8506 -plaintext 0.0.0.0:8032
```

![image-20200509100558031](https://gitee.com/GolangCodeFile/blogcode/raw/master/other/grpc_demo/readme.assets/image-20200509100558031.png)

![image-20200509100643140](https://gitee.com/GolangCodeFile/blogcode/raw/master/other/grpc_demo/readme.assets/image-20200509100643140.png)

![image-20200509100654007](https://gitee.com/GolangCodeFile/blogcode/raw/master/other/grpc_demo/readme.assets/image-20200509100654007.png)

![image-20200509100738846](https://gitee.com/GolangCodeFile/blogcode/raw/master/other/grpc_demo/readme.assets/image-20200509100738846.png)