import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Star, MapPin, Clock } from 'lucide-react';
import type { Tool } from '../data/tools';

interface ToolCardProps extends Omit<Tool, 'description' | 'features' | 'owner' | 'availability'> {}

const ToolCard: React.FC<ToolCardProps> = ({
  id,
  name,
  imageUrl,
  price,
  priceUnit,
  category,
  rating,
  location,
  distance,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Navigating to tool with ID:', id);
    navigate(`/tools/${id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="object-contain w-full h-full p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{distance}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold">{price} ₽</span>
            <span className="text-gray-600"> / {priceUnit}</span>
          </div>
          <Button onClick={handleClick}>Подробнее</Button>
        </div>
      </div>
    </Card>
  );
};

export default ToolCard;
