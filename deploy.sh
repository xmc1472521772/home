#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建项目
npm run build

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "deploy: update site"

# 推送到 gh-pages 分支
git push -f git@github.com:xmc1472521772/HousingSystem.git master:gh-pages

cd - 

git config --global user.email "1472521772@qq.com"
git config --global user.name "xmc1472521772" 

ssh-keygen -t rsa -b 4096 -C "1472521772@qq.com" 