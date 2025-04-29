import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Star, MapPin } from 'lucide-react';

const PopularTools = () => {
  const navigate = useNavigate();

  const popularTools = [
    {
      id: "2",
      name: "Перфоратор Bosch",
      imageUrl: "https://www.promarenda.pro/upload/iblock/3cb/3cb585aeb99019f5f168d01203dda7d1.jpg",
      price: 1800,
      priceUnit: "день",
      rating: 4.7,
      location: "пр. Мира, 45",
      distance: "2.5 км"
    },
    {
      id: "3",
      name: "Шуруповерт Makita",
      imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/759924/1200x800/51379651.jpg",
      price: 1200,
      priceUnit: "день",
      rating: 4.8,
      location: "ул. Ленина, 15",
      distance: "1.2 км"
    },
    {
      id: "4",
      name: "Циркулярная пила DeWalt",
      imageUrl: "https://dewalt.store/media/catalog/product/cache/48/small_image/1248x/a4e40ebdc3e371adff845072e1c73f37/e/9/e9369120-fe55-11ef-b777-005056043025.webp",
      price: 1500,
      priceUnit: "день",
      rating: 4.9,
      location: "ул. Центральная, 12",
      distance: "0.8 км"
    },
    {
      id: "40",
      name: "Компрессор 6 галлонов",
      imageUrl: "https://spb.pnevmoteh.ru/sites/pnevmoteh.ru/files/styles/product-full/public/images/sb4-24.f114.png?itok=2xCrD4GE",
      price: 2200,
      priceUnit: "день",
      rating: 4.6,
      location: "ул. Садовая, 78",
      distance: "3.1 км"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Популярные инструменты</h2>
          <Button 
            variant="outline"
            className="text-sm bg-gray-50 hover:bg-gray-100"
            onClick={() => navigate('/tools')}
          >
            Все инструменты
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularTools.map((tool) => (
            <Card 
              key={tool.id} 
              className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative aspect-square">
                <img
                  src={tool.imageUrl}
                  alt={tool.name}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-base mb-2">{tool.name}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                    <span>{tool.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{tool.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-semibold">{tool.price} ₽</span>
                    <span className="text-sm text-gray-600">/ {tool.priceUnit}</span>
                  </div>
                  <Button 
                    variant="default"
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => navigate(`/tools/${tool.id}`)}
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTools; 