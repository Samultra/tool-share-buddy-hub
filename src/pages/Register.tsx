
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white shadow rounded-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">Создать аккаунт</h2>
              <p className="text-gray-600 mt-2">Присоединяйтесь к нашему сообществу</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Имя</Label>
                  <Input id="firstName" type="text" placeholder="Иван" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Фамилия</Label>
                  <Input id="lastName" type="text" placeholder="Петров" required />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email адрес</Label>
                <Input id="email" type="email" placeholder="ivan@example.com" required />
              </div>
              
              <div>
                <Label htmlFor="password">Пароль</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Создайте пароль" 
                  required 
                />
                <p className="text-xs text-gray-500 mt-1">
                  Минимум 8 символов, 1 заглавная буква, 1 цифра и 1 специальный символ
                </p>
              </div>
              
              <div className="flex items-start">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Я согласен с{' '}
                  <Link to="/terms" className="text-brand-green hover:text-brand-green/90">
                    условиями использования
                  </Link>{' '}
                  и{' '}
                  <Link to="/privacy" className="text-brand-green hover:text-brand-green/90">
                    политикой конфиденциальности
                  </Link>
                </Label>
              </div>
              
              <Button type="submit" className="w-full bg-brand-green hover:bg-opacity-90">
                Создать аккаунт
              </Button>
            </form>
            
            <div className="my-6 relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Или зарегистрируйтесь через</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Facebook className="mr-2 h-5 w-5" />
                Войти через Facebook
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Войти через Google
              </Button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Уже есть аккаунт?{' '}
                <Link to="/login" className="text-brand-green hover:text-brand-green/90 font-semibold">
                  Войти
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
