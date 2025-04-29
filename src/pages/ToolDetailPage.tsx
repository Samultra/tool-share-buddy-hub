import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar } from '../components/ui/calendar';
import { Star, MapPin, Clock, User, Shield, Wrench, Info, FileText } from 'lucide-react';
import { getToolById } from '../data/tools';

const ToolDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log('ToolDetailPage received ID:', id); // Добавляем лог для отладки
  
  const tool = getToolById(id || '');
  
  console.log('Found tool:', tool); // Добавляем лог для отладки

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow bg-gray-50">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Инструмент не найден</h1>
              <Button onClick={() => navigate('/tools')}>Вернуться к списку инструментов</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Изображение инструмента */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={tool.imageUrl}
                  alt={tool.name}
                  className="object-contain w-full h-full p-4"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={tool.imageUrl}
                    alt={tool.name}
                    className="object-contain w-full h-full p-2"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={tool.imageUrl}
                    alt={tool.name}
                    className="object-contain w-full h-full p-2"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={tool.imageUrl}
                    alt={tool.name}
                    className="object-contain w-full h-full p-2"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={tool.imageUrl}
                alt={tool.name}
                    className="object-contain w-full h-full p-2"
              />
                </div>
              </div>
            </div>

            {/* Основная информация */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{tool.name}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span>{tool.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-1" />
                    <span>{tool.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-1" />
                    <span>{tool.distance}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-gray-800">{tool.price} ₽</span>
                  <span className="text-gray-600"> / {tool.priceUnit}</span>
                </div>
                <Button size="lg">Арендовать</Button>
              </div>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">
                    <Info className="h-4 w-4 mr-2" />
                    Описание
                  </TabsTrigger>
                  <TabsTrigger value="features">
                    <Wrench className="h-4 w-4 mr-2" />
                    Характеристики
                  </TabsTrigger>
                  <TabsTrigger value="owner">
                    <User className="h-4 w-4 mr-2" />
                    Владелец
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <Card className="p-4">
                  <p className="text-gray-600">{tool.description}</p>
                  </Card>
                </TabsContent>
                <TabsContent value="features" className="mt-4">
                  <Card className="p-4">
                    <ul className="space-y-2">
                    {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                    ))}
                  </ul>
                  </Card>
                </TabsContent>
                <TabsContent value="owner" className="mt-4">
                  <Card className="p-4">
                    <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-gray-600 mr-1" />
                          <span>{tool.owner.name}</span>
                      </div>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-400 mr-1" />
                          <span>{tool.owner.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-gray-600 mr-1" />
                          <span>В сообществе с {tool.owner.memberSince}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-gray-600 mr-1" />
                          <span>{tool.owner.reviews} отзывов</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Календарь и информация о доступности */}
          <div className="mt-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Выберите дату аренды</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Calendar className="rounded-md border" />
                </div>
                <div className="space-y-4">
                    <div>
                    <h3 className="font-medium mb-2">Информация о доступности</h3>
                    <p className="text-gray-600">
                      Следующая доступная дата: {tool.availability.nextAvailable}
                    </p>
                    </div>
                    <div>
                    <h3 className="font-medium mb-2">Сроки аренды</h3>
                    <p className="text-gray-600">
                      Минимальный срок: {tool.availability.minRentalDays} {tool.availability.minRentalDays === 1 ? 'день' : 'дня'}
                    </p>
                      <p className="text-gray-600">
                      Максимальный срок: {tool.availability.maxRentalDays} {tool.availability.maxRentalDays === 1 ? 'день' : 'дней'}
                      </p>
                    </div>
                  <div>
                    <h3 className="font-medium mb-2">Стоимость</h3>
                    <p className="text-gray-600">
                      {tool.price} ₽ / {tool.priceUnit}
                    </p>
                  </div>
                  <Button size="lg" className="w-full">Забронировать</Button>
                </div>
            </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolDetailPage;

