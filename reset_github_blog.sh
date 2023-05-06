#!/bin/bash

rm -rf ./_site ;bundle exec jekyll build
cd /opt/code/github.com/Cc360428/Cc360428.github.io
rm -rf `ls -ls | grep -v .git`
mv /opt/code/gitee.com/ClientCodeFile/jekyall_blog/_site/* /opt/code/github.com/Cc360428/Cc360428.github.io/
git add .
git commit -m "blog push"
git push origin master
