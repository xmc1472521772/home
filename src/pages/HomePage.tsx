import React from 'react';
import { Row, Col, Typography } from 'antd';
import Navbar from '../components/Navbar';
import HomeCarousel from '../components/Carousel';
import HouseCard from '../components/HouseCard';
import Footer from '../components/Footer';

const { Title } = Typography;

const HomePage: React.FC = () => {
  const recommendedHouses = [
    {
      id: 1,
      title: '精装修三居室',
      price: 5000,
      area: 120,
      location: '北京市朝阳区',
      image: '/images/house1-1.jpg',
    },
    {
      id: 2,
      title: '现代简约两居室',
      price: 4500,
      area: 90,
      location: '北京市海淀区',
      image: '/images/house1-2.jpg',
    },
    {
      id: 3,
      title: '温馨一居室',
      price: 3500,
      area: 60,
      location: '北京市西城区',
      image: '/images/house1-3.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomeCarousel />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Title level={2} className="text-center mb-8">热门房源推荐</Title>
          <Row gutter={[16, 16]}>
            {recommendedHouses.map(house => (
              <Col xs={24} sm={12} md={8} key={house.id}>
                <HouseCard {...house} />
              </Col>
            ))}
          </Row>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage; 