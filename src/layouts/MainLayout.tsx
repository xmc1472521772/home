import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  SearchOutlined,
  PlusOutlined,
  UserOutlined,
  LoginOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '/houses',
      icon: <SearchOutlined />,
      label: '找房',
    },
    {
      key: '/publish',
      icon: <PlusOutlined />,
      label: '发布房源',
    },
    {
      key: '/user',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      key: '/login',
      icon: <LoginOutlined />,
      label: '登录',
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Header className="flex items-center">
        <div className="text-white text-xl mr-8">租房信息平台</div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Header>
      <Content className="p-6">
        <Outlet />
      </Content>
      <Footer className="text-center">
        租房信息平台 ©{new Date().getFullYear()} Created by Your Company
      </Footer>
    </Layout>
  );
};

export default MainLayout; 