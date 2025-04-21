import React from 'react';
import { Carousel } from 'antd';

const HomeCarousel: React.FC = () => {
  const carouselItems = [
    {
      id: 1,
      image: '/images/house1-1.jpg',
      title: '精装修三居室',
      description: '北京市朝阳区'
    },
    {
      id: 2,
      image: '/images/house1-2.jpg',
      title: '现代简约两居室',
      description: '北京市海淀区'
    },
    {
      id: 3,
      image: '/images/house1-3.jpg',
      title: '温馨一居室',
      description: '北京市西城区'
    }
  ];

  return (
    <div className="w-full h-96">
      <Carousel autoplay>
        {carouselItems.map(item => (
          <div key={item.id} className="relative h-96">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel; 