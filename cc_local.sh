#!/bin/bash
rm -rf ./_site
bundle exec jekyll build
rm -rf /home/save/nginx/html/blog/*
mv /home/save/code/gitee.com/ClientCodeFile/jekyall_blog/_site/* /home/save/nginx/html/blog/ 

