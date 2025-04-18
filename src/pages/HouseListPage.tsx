import React, { useState } from 'react';
import { Card, Row, Col, Input, Select, Button, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

interface House {
  id: number;
  title: string;
  price: number;
  area: number;
  location: string;
  image: string;
}

const HouseListPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [areaRange, setAreaRange] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // 模拟房源数据
  const houses: House[] = [
    {
      id: 1,
      title: '精装修三居室',
      price: 5000,
      area: 120,
      location: '北京市朝阳区',
      image: 'images/house1-1.jpg',
    },
    {
      id: 2,
      title: '现代简约两居室',
      price: 4500,
      area: 90,
      location: '北京市海淀区',
      image: 'images/house1-2.jpg',
    },
    {
      id: 3,
      title: '温馨一居室',
      price: 3500,
      area: 60,
      location: '北京市西城区',
      image: 'images/house1-3.jpg',
    },
  ];

  const handleSearch = () => {
    // TODO: 实现搜索逻辑
    console.log('搜索条件:', { searchText, priceRange, areaRange });
  };

  const handleCardClick = (id: number) => {
    navigate(`/houses/${id}`);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <Row gutter={16}>
          <Col span={8}>
            <Input
              placeholder="搜索房源"
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </Col>
          <Col span={6}>
            <Select
              style={{ width: '100%' }}
              value={priceRange}
              onChange={setPriceRange}
            >
              <Option value="all">价格不限</Option>
              <Option value="0-3000">3000元以下</Option>
              <Option value="3000-5000">3000-5000元</Option>
              <Option value="5000-8000">5000-8000元</Option>
              <Option value="8000+">8000元以上</Option>
            </Select>
          </Col>
          <Col span={6}>
            <Select
              style={{ width: '100%' }}
              value={areaRange}
              onChange={setAreaRange}
            >
              <Option value="all">面积不限</Option>
              <Option value="0-50">50㎡以下</Option>
              <Option value="50-100">50-100㎡</Option>
              <Option value="100-150">100-150㎡</Option>
              <Option value="150+">150㎡以上</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Button type="primary" block onClick={handleSearch}>
              搜索
            </Button>
          </Col>
        </Row>
      </div>

      <Row gutter={16}>
        {houses.map((house) => (
          <Col span={8} key={house.id} className="mb-6">
            <Card
              hoverable
              cover={<img alt={house.title} src={house.image} style={{ height: 200, objectFit: 'cover' }} />}
              onClick={() => handleCardClick(house.id)}
            >
              <Card.Meta
                title={house.title}
                description={
                  <div>
                    <p>价格：{house.price}元/月</p>
                    <p>面积：{house.area}㎡</p>
                    <p>位置：{house.location}</p>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-6 text-center">
        <Pagination
          current={currentPage}
          total={50}
          pageSize={9}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default HouseListPage; 