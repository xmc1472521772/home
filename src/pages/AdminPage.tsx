import React, { useState } from 'react';
import { Tabs, Table, Button, Modal, Form, Input, Select, message } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;
const { confirm } = Modal;

interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  role: string;
  status: string;
}

interface House {
  id: number;
  title: string;
  price: number;
  location: string;
  status: string;
  publisher: string;
  publishTime: string;
}

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // 模拟用户数据
  const users: User[] = [
    {
      id: 1,
      username: '张三',
      email: 'zhangsan@example.com',
      phone: '13800138000',
      role: '普通用户',
      status: '正常',
    },
    // 更多用户数据...
  ];

  // 模拟房源数据
  const houses: House[] = [
    {
      id: 1,
      title: '精装修三居室',
      price: 5000,
      location: '北京市朝阳区',
      status: '已发布',
      publisher: '张三',
      publishTime: '2023-01-15',
    },
    // 更多房源数据...
  ];

  const userColumns = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record: User) => (
        <span>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEditUser(record)}
          >
            编辑
          </Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteUser(record)}
          >
            删除
          </Button>
        </span>
      ),
    },
  ];

  const houseColumns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `${price}元/月`,
    },
    {
      title: '位置',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '发布人',
      dataIndex: 'publisher',
      key: 'publisher',
    },
    {
      title: '发布时间',
      dataIndex: 'publishTime',
      key: 'publishTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record: House) => (
        <span>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEditHouse(record)}
          >
            编辑
          </Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteHouse(record)}
          >
            删除
          </Button>
        </span>
      ),
    },
  ];

  const handleEditUser = (user: User) => {
    form.setFieldsValue(user);
    setIsModalVisible(true);
  };

  const handleDeleteUser = (user: User) => {
    confirm({
      title: '确认删除',
      icon: <ExclamationCircleOutlined />,
      content: `确定要删除用户 ${user.username} 吗？`,
      onOk() {
        // TODO: 实现删除用户逻辑
        message.success('删除成功！');
      },
    });
  };

  const handleEditHouse = (house: House) => {
    form.setFieldsValue(house);
    setIsModalVisible(true);
  };

  const handleDeleteHouse = (house: House) => {
    confirm({
      title: '确认删除',
      icon: <ExclamationCircleOutlined />,
      content: `确定要删除房源 ${house.title} 吗？`,
      onOk() {
        // TODO: 实现删除房源逻辑
        message.success('删除成功！');
      },
    });
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      // TODO: 实现保存逻辑
      console.log('表单数据:', values);
      message.success('保存成功！');
      setIsModalVisible(false);
      form.resetFields();
    });
  };

  return (
    <div className="p-6">
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="用户管理" key="1">
          <Table columns={userColumns} dataSource={users} rowKey="id" />
        </TabPane>
        <TabPane tab="房源管理" key="2">
          <Table columns={houseColumns} dataSource={houses} rowKey="id" />
        </TabPane>
      </Tabs>

      <Modal
        title={activeTab === '1' ? '编辑用户' : '编辑房源'}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          {activeTab === '1' ? (
            <>
              <Form.Item
                name="username"
                label="用户名"
                rules={[{ required: true, message: '请输入用户名！' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="邮箱"
                rules={[
                  { required: true, message: '请输入邮箱！' },
                  { type: 'email', message: '请输入有效的邮箱地址！' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="电话"
                rules={[
                  { required: true, message: '请输入电话！' },
                  { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号！' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="role"
                label="角色"
                rules={[{ required: true, message: '请选择角色！' }]}
              >
                <Select>
                  <Option value="普通用户">普通用户</Option>
                  <Option value="管理员">管理员</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="status"
                label="状态"
                rules={[{ required: true, message: '请选择状态！' }]}
              >
                <Select>
                  <Option value="正常">正常</Option>
                  <Option value="禁用">禁用</Option>
                </Select>
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item
                name="title"
                label="标题"
                rules={[{ required: true, message: '请输入标题！' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="price"
                label="价格"
                rules={[{ required: true, message: '请输入价格！' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="location"
                label="位置"
                rules={[{ required: true, message: '请输入位置！' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="status"
                label="状态"
                rules={[{ required: true, message: '请选择状态！' }]}
              >
                <Select>
                  <Option value="已发布">已发布</Option>
                  <Option value="已下架">已下架</Option>
                </Select>
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default AdminPage; 