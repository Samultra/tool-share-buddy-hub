import React from 'react';
import CategoryCard from './CategoryCard';

const PopularCategories = () => {
  const categories = [
    {
      name: "Электроинструменты",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 18h2v-3h3V9h-3V6h-2" />
          <rect x="4" y="3" width="16" height="18" rx="2" />
        </svg>
      ),
      count: 245,
      href: "/categories/power-tools"
    },
    {
      name: "Садовые инструменты",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M12 5L7 9M12 5L17 9" />
          <path d="M2 16.5h20" />
        </svg>
      ),
      count: 187,
      href: "/categories/garden-tools"
    },
    {
      name: "Сантехника",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4M12 10v2M12 18v4M4.93 10a4 4 0 0 0 0 4h14.14a4 4 0 1 0 0-4H4.93z" />
        </svg>
      ),
      count: 98,
      href: "/categories/plumbing"
    },
    {
      name: "Покраска",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21.66 10.44l-8.23 8.23a2.12 2.12 0 0 1-2.97 0l-4.62-4.62a2.11 2.11 0 0 1 0-2.97l8.23-8.23a1.56 1.56 0 0 1 2.2 0l5.39 5.39c.61.61.61 1.59 0 2.2zM10 16l4-4" />
          <path d="M10.44 19.73l-.71.71a2.11 2.11 0 0 1-2.97 0l-4.62-4.62a2.11 2.11 0 0 1 0-2.97l.71-.71" />
          <path d="M15 8h.01" />
        </svg>
      ),
      count: 145,
      href: "/categories/painting"
    },
    {
      name: "Электрика",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.5 4h-5L7 9h4l-1 7h2l4-7h-4l1-5z" />
        </svg>
      ),
      count: 112,
      href: "/categories/electrical"
    },
    {
      name: "Строительные инструменты",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.88l-.82-1.23A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
        </svg>
      ),
      count: 156,
      href: "/categories/construction"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Популярные категории</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Изучите наши самые популярные категории инструментов, доступные для аренды в вашем районе
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              icon={category.icon}
              count={category.count}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
