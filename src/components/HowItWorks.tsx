import React from 'react';
import { Search, Calendar, HandHeart, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="text-white" size={28} />,
      title: "Найдите нужный инструмент",
      description: "Просмотрите наш обширный каталог инструментов, доступных для аренды в вашем районе."
    },
    {
      icon: <Calendar className="text-white" size={28} />,
      title: "Забронируйте аренду",
      description: "Выберите даты и отправьте запрос на бронирование владельцу инструмента."
    },
    {
      icon: <HandHeart className="text-white" size={28} />,
      title: "Заберите и используйте",
      description: "Встретьтесь с владельцем, проверьте инструмент и приступайте к работе."
    },
    {
      icon: <Star className="text-white" size={28} />,
      title: "Верните и оставьте отзыв",
      description: "Верните инструмент в хорошем состоянии и поделитесь своим опытом."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Как работает ToolShare</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Аренда инструментов должна быть простой и удобной. Наша платформа соединяет владельцев инструментов с людьми, которым они нужны, создавая сообщество совместного использования.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto shadow-lg">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200">
                    <div className="w-0 h-full bg-brand-green transition-all duration-1000" style={{ width: '100%' }} />
                  </div>
                )}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-brand-green text-white w-6 h-6 rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
