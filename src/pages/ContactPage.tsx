import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Свяжитесь с нами</h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Контактная информация */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Контактная информация</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-brand-green" />
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-gray-600">info@toolshare.ru</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-brand-green" />
                      <div>
                        <p className="font-medium text-gray-800">Телефон</p>
                        <p className="text-gray-600">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-brand-green" />
                      <div>
                        <p className="font-medium text-gray-800">Адрес</p>
                        <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Режим работы</h2>
                  <div className="space-y-2">
                    <p className="text-gray-600">Понедельник - Пятница: 9:00 - 18:00</p>
                    <p className="text-gray-600">Суббота: 10:00 - 16:00</p>
                    <p className="text-gray-600">Воскресенье: выходной</p>
                  </div>
                </div>
              </div>
              
              {/* Форма обратной связи */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Отправить сообщение</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Введите ваш email"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Тема
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Введите тему сообщения"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Введите ваше сообщение"
                      className="w-full h-32"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage; 