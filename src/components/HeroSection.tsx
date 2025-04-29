import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-brand-beige to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Арендуйте нужный инструмент для любого проекта
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Получите доступ к тысячам инструментов от вашего сообщества. Экономьте деньги, уменьшайте отходы и выполняйте проекты правильно.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Какой инструмент вам нужен?"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>
              
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Ваше местоположение"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>
              
              <Link to="/tools">
                <Button className="w-full md:w-auto px-6 py-3 bg-brand-green hover:bg-opacity-90">
                  Поиск
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
              <svg className="w-8 h-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                <path d="M12 6V12L16 14" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">Экономьте время</h3>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
              <svg className="w-8 h-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">Экономьте деньги</h3>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
              <svg className="w-8 h-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">Поддержите местных</h3>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-md">
              <svg className="w-8 h-8 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 14V2M7 14V2M3 6h4m10 0h4M3 10h18M5 18a2 2 0 100 4 2 2 0 000-4 2 2 0 000 4z" />
                <path d="M5 18h14" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-800">Уменьшайте отходы</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
