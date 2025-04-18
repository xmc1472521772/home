# 租房信息平台

一个基于React + TypeScript + Ant Design的现代化租房信息平台。

## 功能特点

- 用户注册与登录
- 房源信息浏览与搜索
- 房源详情查看
- 预约看房
- 发布房源
- 用户中心
- 后台管理

## 技术栈

- React 18
- TypeScript
- Ant Design 5
- React Router 6
- Tailwind CSS
- Axios

## 项目结构

```
src/
  ├── components/     # 公共组件
  ├── pages/         # 页面组件
  ├── layouts/       # 布局组件
  ├── services/      # API服务
  ├── utils/         # 工具函数
  ├── assets/        # 静态资源
  ├── App.tsx        # 应用入口
  └── index.tsx      # 渲染入口
```

## 开发环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

## 安装与运行

1. 克隆项目
```bash
git clone [项目地址]
cd housing-system
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm start
```

4. 构建生产版本
```bash
npm run build
```

## 主要页面

- 首页：展示推荐房源和搜索功能
- 登录/注册：用户认证
- 房源列表：展示所有房源
- 房源详情：展示房源详细信息
- 发布房源：发布新的房源信息
- 用户中心：管理个人信息和房源
- 后台管理：管理员功能

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

MIT License 