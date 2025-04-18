

# 初始化 Git 仓库
git init

# 添加所有文件
git add -A

# 提交代码
git commit -m "deploy: update site"

# 推送到 gh-pages 分支
git push -f git@github.com:xmc1472521772/HousingSystem.git master:gh-pages