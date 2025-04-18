import React, { useState } from 'react';
import { Form, Input, Button, Upload, Select, InputNumber, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
const { TextArea } = Input;

interface HouseForm {
  title: string;
  price: number;
  area: number;
  location: string;
  description: string;
  facilities: string[];
  images: any[];
}

const PublishHousePage: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values: HouseForm) => {
    // 处理图片上传
    const formData = new FormData();
    values.images?.forEach((file: any) => {
      formData.append('images', file.originFileObj);
    });
    
    // TODO: 实现发布房源逻辑
    console.log('发布房源信息:', values);
    message.success('发布成功！');
    navigate('/houses');
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="p-6">
      <Card title="发布房源">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: '请输入房源标题！' }]}
          >
            <Input placeholder="请输入房源标题" />
          </Form.Item>

          <Form.Item
            name="price"
            label="价格"
            rules={[{ required: true, message: '请输入价格！' }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              placeholder="请输入月租价格"
              addonAfter="元/月"
            />
          </Form.Item>

          <Form.Item
            name="area"
            label="面积"
            rules={[{ required: true, message: '请输入面积！' }]}
          >
            <InputNumber
              style={{ width: '100%' }}
              min={0}
              placeholder="请输入房屋面积"
              addonAfter="㎡"
            />
          </Form.Item>

          <Form.Item
            name="location"
            label="位置"
            rules={[{ required: true, message: '请输入位置！' }]}
          >
            <Input placeholder="请输入详细地址" />
          </Form.Item>

          <Form.Item
            name="facilities"
            label="设施"
            rules={[{ required: true, message: '请选择设施！' }]}
          >
            <Select
              mode="multiple"
              placeholder="请选择房屋设施"
            >
              <Option value="空调">空调</Option>
              <Option value="洗衣机">洗衣机</Option>
              <Option value="冰箱">冰箱</Option>
              <Option value="电视">电视</Option>
              <Option value="宽带">宽带</Option>
              <Option value="热水器">热水器</Option>
              <Option value="暖气">暖气</Option>
              <Option value="衣柜">衣柜</Option>
              <Option value="床">床</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="description"
            label="描述"
            rules={[{ required: true, message: '请输入房源描述！' }]}
          >
            <TextArea rows={4} placeholder="请输入房源详细描述" />
          </Form.Item>

          <Form.Item
            name="images"
            label="图片"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: '请上传房源图片！' }]}
          >
            <Upload
              listType="picture-card"
              multiple
              beforeUpload={() => {
                return false;
              }}
            >
              <div>
                <UploadOutlined />
                <div style={{ marginTop: 8 }}>上传图片</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              发布房源
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default PublishHousePage; 