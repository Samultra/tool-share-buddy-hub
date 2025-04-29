
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
  count: number;
  href: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon, count, href }) => {
  return (
    <Link to={href} className="block">
      <div className="bg-white rounded-lg shadow-md px-6 py-8 text-center hover:shadow-lg transition-transform hover:-translate-y-1">
        <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center text-brand-green mx-auto mb-4">
          {icon}
        </div>
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-500 text-sm">{count} инструментов доступно</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
