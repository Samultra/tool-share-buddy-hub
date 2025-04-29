import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-brand-green rounded-full p-2">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 7l-5 5 5 5" />
                  <path d="M10 12H3" />
                  <path d="M21 12v0" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800">ToolShare</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Объединяем владельцев инструментов с теми, кому они нужны. Арендуйте, делитесь, создавайте сообщество.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tools" className="text-gray-600 hover:text-brand-green transition-colors">
                  Каталог инструментов
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-brand-green transition-colors">
                  Категории
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-brand-green transition-colors">
                  Как это работает
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brand-green transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-green transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-green transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brand-green transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-green transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Подписка на новости</h3>
            <p className="text-gray-600 mb-4">Будьте в курсе новых инструментов и акций</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Ваш email адрес"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
              <button type="submit" className="bg-brand-green text-white px-4 py-2 rounded-r hover:bg-opacity-90">
                <Mail className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} ToolShare. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
