
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Иван Петров",
      role: "Домовладелец",
      content: "ToolShare сэкономил мне сотни рублей на ремонте кухни. Вместо покупки дорогих инструментов, которые я бы использовал всего раз, я арендовал их у соседей за небольшую часть стоимости.",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Мария Иванова",
      role: "DIY-энтузиаст",
      content: "Как человеку, который любит DIY-проекты, но живет в небольшой квартире, ToolShare стал настоящим спасением. Я могу использовать профессиональные инструменты без проблем с хранением.",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "Алексей Смирнов",
      role: "Владелец инструментов",
      content: "За последние два месяца я заработал более 30 000 рублей, сдавая в аренду свои электроинструменты, которые просто пылились. Отличный способ окупить стоимость инструментов и помочь сообществу.",
      avatarUrl: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 4
    },
  ];

  return (
    <section className="py-16 bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Что говорит наше сообщество</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных пользователей, которые экономят деньги и уменьшают отходы благодаря совместному использованию инструментов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
