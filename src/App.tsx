import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

// 布局组件
import MainLayout from './layouts/MainLayout';

// 页面组件
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HouseListPage from './pages/HouseListPage';
import HouseDetailPage from './pages/HouseDetailPage';
import PublishHousePage from './pages/PublishHousePage';
import UserCenterPage from './pages/UserCenterPage';
import AdminPage from './pages/AdminPage';

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="houses" element={<HouseListPage />} />
            <Route path="houses/:id" element={<HouseDetailPage />} />
            <Route path="publish" element={<PublishHousePage />} />
            <Route path="user" element={<UserCenterPage />} />
            <Route path="admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App; 