
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, User, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-brand-green rounded-full p-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 7l-5 5 5 5" />
                <path d="M10 12H3" />
                <path d="M21 12v0" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">ToolShare</span>
          </Link>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:flex relative flex-1 mx-10">
            <input
              type="text"
              placeholder="Поиск инструментов..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
            <Button variant="ghost" className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/tools" className="text-gray-700 hover:text-brand-green transition-colors">
              Каталог
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-brand-green transition-colors">
              Как это работает
            </Link>
            <Link to="/login">
              <Button variant="outline" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Войти</span>
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-brand-green hover:bg-opacity-90">Регистрация</Button>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск инструментов..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
            <Button variant="ghost" className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t border-gray-200 pt-3">
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/tools" className="block text-gray-700 hover:text-brand-green transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="block text-gray-700 hover:text-brand-green transition-colors">
                  Как это работает
                </Link>
              </li>
              <li className="flex gap-3 mt-2">
                <Link to="/login" className="flex-1">
                  <Button variant="outline" className="w-full">Войти</Button>
                </Link>
                <Link to="/register" className="flex-1">
                  <Button className="w-full bg-brand-green hover:bg-opacity-90">Регистрация</Button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
