#!/bin/bash
rm -rf ./_site
bundle exec jekyll build
cd /home/save/code/github.com/Cc360428
rm -rf $(ls -ls | grep -v .git)
mv /home/save/code/gitee.com/ClientCodeFile/jekyall_blog/_site/* /opt/code/github.com/Cc360428/Cc360428.github.io/
git add .
git commit -m "blog push"
git push origin master
