import React from 'react';
import { Input, Button, Space } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate('/')}>
              住房管理系统
            </div>
          </div>
          
          <div className="flex-1 max-w-xl mx-4">
            <Input
              placeholder="搜索房源"
              prefix={<SearchOutlined />}
              className="rounded-full"
            />
          </div>

          <Space>
            <Button type="primary" onClick={() => navigate('/login')}>登录</Button>
            <Button onClick={() => navigate('/register')}>注册</Button>
            <Button icon={<UserOutlined />} onClick={() => navigate('/profile')} />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 