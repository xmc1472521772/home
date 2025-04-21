import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

interface HouseCardProps {
  id: number;
  title: string;
  price: number;
  area: number;
  location: string;
  image: string;
}

const HouseCard: React.FC<HouseCardProps> = ({ id, title, price, area, location, image }) => {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      className="w-full"
      cover={
        <img 
          alt={title} 
          src={image}
          className="h-48 object-cover"
        />
      }
      onClick={() => navigate(`/houses/${id}`)}
    >
      <Card.Meta
        title={title}
        description={
          <div className="space-y-1">
            <p className="text-lg font-bold text-red-500">{price}元/月</p>
            <p>面积：{area}㎡</p>
            <p>位置：{location}</p>
          </div>
        }
      />
    </Card>
  );
};

export default HouseCard; 