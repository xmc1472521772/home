import React, { useState } from 'react';
import { Tabs, Card, List, Button, Avatar, Rate, Tag } from 'antd';
import { UserOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

interface UserInfo {
  username: string;
  email: string;
  phone: string;
  avatar: string;
}

interface House {
  id: number;
  title: string;
  price: number;
  status: string;
  publishTime: string;
}

interface Appointment {
  id: number;
  houseTitle: string;
  date: string;
  status: string;
}

const UserCenterPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1');

  // 模拟用户数据
  const userInfo: UserInfo = {
    username: '张三',
    email: 'zhangsan@example.com',
    phone: '13800138000',
    avatar: 'https://example.com/avatar.jpg',
  };

  // 模拟发布的房源数据
  const publishedHouses: House[] = [
    {
      id: 1,
      title: '精装修三居室',
      price: 5000,
      status: '已发布',
      publishTime: '2023-01-15',
    },
    // 更多房源数据...
  ];

  // 模拟预约看房数据
  const appointments: Appointment[] = [
    {
      id: 1,
      houseTitle: '精装修三居室',
      date: '2023-02-01 14:00',
      status: '待确认',
    },
    // 更多预约数据...
  ];

  return (
    <div className="p-6">
      <Card>
        <div className="flex items-center mb-6">
          <Avatar size={64} src={userInfo.avatar} icon={<UserOutlined />} />
          <div className="ml-4">
            <h2 className="text-xl">{userInfo.username}</h2>
            <p>邮箱：{userInfo.email}</p>
            <p>电话：{userInfo.phone}</p>
          </div>
        </div>

        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane tab="我发布的房源" key="1">
            <List
              dataSource={publishedHouses}
              renderItem={(house) => (
                <List.Item
                  actions={[
                    <Button type="link" key="edit">
                      编辑
                    </Button>,
                    <Button type="link" danger key="delete">
                      删除
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<HomeOutlined />}
                    title={house.title}
                    description={
                      <div>
                        <p>价格：{house.price}元/月</p>
                        <p>发布时间：{house.publishTime}</p>
                        <Tag color={house.status === '已发布' ? 'green' : 'red'}>
                          {house.status}
                        </Tag>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </TabPane>

          <TabPane tab="预约看房" key="2">
            <List
              dataSource={appointments}
              renderItem={(appointment) => (
                <List.Item
                  actions={[
                    <Button type="link" key="cancel">
                      取消预约
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<CalendarOutlined />}
                    title={appointment.houseTitle}
                    description={
                      <div>
                        <p>预约时间：{appointment.date}</p>
                        <Tag
                          color={
                            appointment.status === '待确认'
                              ? 'orange'
                              : appointment.status === '已确认'
                              ? 'green'
                              : 'red'
                          }
                        >
                          {appointment.status}
                        </Tag>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </TabPane>

          <TabPane tab="我的评价" key="3">
            <List
              dataSource={[]}
              renderItem={() => null}
              locale={{ emptyText: '暂无评价' }}
            />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default UserCenterPage; 