#!/bin/bash
rm -rf ./_site
bundle exec jekyll build
cd /opt/code/gitee.com/Cc360428/blog
rm -rf $(ls -ls | grep -v .git)
mv /opt/code/gitee.com/ClientCodeFile/jekyall_blog/_site/* /opt/code/gitee.com/Cc360428/blog/
git add .
git commit -m "blog push"
git push origin master
