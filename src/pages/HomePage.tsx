import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={1}>欢迎来到住房管理系统</Title>
      <Title level={3}>这是首页</Title>
    </div>
  );
};

export default HomePage; 