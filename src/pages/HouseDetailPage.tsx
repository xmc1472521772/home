import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  Descriptions,
  Button,
  Image,
  Rate,
  List,
  Form,
  Input,
  message,
  Modal,
  Avatar,
} from 'antd';
import { UserOutlined, CalendarOutlined, PhoneOutlined } from '@ant-design/icons';

const { TextArea } = Input;

interface HouseDetail {
  id: number;
  title: string;
  price: number;
  area: number;
  location: string;
  description: string;
  images: string[];
  facilities: string[];
  landlord: {
    name: string;
    phone: string;
    rating: number;
  };
  comments: {
    id: number;
    user: string;
    content: string;
    rating: number;
    date: string;
  }[];
}

const HouseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // 模拟房源详情数据
  const houseDetail: HouseDetail = {
    id: 1,
    title: '精装修三居室',
    price: 5000,
    area: 120,
    location: '北京市朝阳区',
    description: '这是一套精装修的三居室，采光好，交通便利...',
    images: [
      '/images/house1-1.jpg',
      '/images/house1-2.jpg',
      '/images/house1-3.jpg',
    ],
    facilities: ['空调', '洗衣机', '冰箱', '电视', '宽带'],
    landlord: {
      name: '张先生',
      phone: '13800138000',
      rating: 4.5,
    },
    comments: [
      {
        id: 1,
        user: '李女士',
        content: '房子很好，房东很热情！',
        rating: 5,
        date: '2023-01-15',
      },
    ],
  };

  const handleAppointment = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = (values: any) => {
    // TODO: 实现预约看房逻辑
    console.log('预约信息:', values);
    message.success('预约成功！');
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div className="p-6">
      <Card title={houseDetail.title}>
        <Image.PreviewGroup>
          <div className="mb-6">
            {houseDetail.images.map((image, index) => (
              <Image
                key={index}
                width={200}
                src={image}
                alt={`${houseDetail.title}-${index + 1}`}
              />
            ))}
          </div>
        </Image.PreviewGroup>

        <Descriptions bordered>
          <Descriptions.Item label="价格">{houseDetail.price}元/月</Descriptions.Item>
          <Descriptions.Item label="面积">{houseDetail.area}㎡</Descriptions.Item>
          <Descriptions.Item label="位置">{houseDetail.location}</Descriptions.Item>
          <Descriptions.Item label="设施" span={3}>
            {houseDetail.facilities.join('、')}
          </Descriptions.Item>
          <Descriptions.Item label="描述" span={3}>
            {houseDetail.description}
          </Descriptions.Item>
        </Descriptions>

        <div className="mt-6">
          <h3>房东信息</h3>
          <Descriptions bordered>
            <Descriptions.Item label="姓名">{houseDetail.landlord.name}</Descriptions.Item>
            <Descriptions.Item label="电话">{houseDetail.landlord.phone}</Descriptions.Item>
            <Descriptions.Item label="评分">
              <Rate disabled defaultValue={houseDetail.landlord.rating} />
            </Descriptions.Item>
          </Descriptions>
        </div>

        <div className="mt-6">
          <Button type="primary" onClick={handleAppointment}>
            预约看房
          </Button>
        </div>

        <div className="mt-6">
          <h3>评论</h3>
          <List
            itemLayout="horizontal"
            dataSource={houseDetail.comments}
            renderItem={(comment) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={comment.user}
                  description={
                    <>
                      <div>{comment.content}</div>
                      <div>
                        <Rate disabled defaultValue={comment.rating} />
                        <span style={{ marginLeft: 8 }}>{comment.date}</span>
                      </div>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      </Card>

      <Modal
        title="预约看房"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: '请输入您的姓名！' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="姓名" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: '请输入您的手机号！' },
              { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号！' },
            ]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="手机号" />
          </Form.Item>
          <Form.Item
            name="date"
            rules={[{ required: true, message: '请选择看房时间！' }]}
          >
            <Input prefix={<CalendarOutlined />} placeholder="看房时间" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[{ required: true, message: '请输入留言！' }]}
          >
            <TextArea rows={4} placeholder="留言" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              提交预约
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default HouseDetailPage; 