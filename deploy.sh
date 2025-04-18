#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:xmc1472521772/HousingSystem.git master:gh-pages

cd - 

git config --global user.email "1472521772@qq.com"
git config --global user.name "xmc1472521772" 

ssh-keygen -t rsa -b 4096 -C "1472521772@qq.com" 