#!/bin/bash
rm -rf ./_site
bundle exec jekyll build
rm -rf /opt/localhost/nginx/html/blog/*
mv /opt/code/gitee.com/ClientCodeFile/jekyall_blog/_site/* /opt/localhost/nginx/html/blog/
