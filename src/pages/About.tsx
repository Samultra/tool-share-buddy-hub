import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="py-16 bg-brand-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">О нас</h1>
              <p className="text-xl text-gray-600">
                ToolShare - это платформа, которая объединяет людей, у которых есть инструменты, с теми, кому они нужны.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Наша миссия</h2>
                <p className="text-gray-600 mb-4">
                  Мы стремимся создать сообщество, где каждый может получить доступ к необходимым инструментам без лишних затрат.
                </p>
                <p className="text-gray-600 mb-4">
                  Наша платформа помогает людям экономить деньги, уменьшать отходы и строить более устойчивое будущее.
                </p>
                <Link to="/how-it-works">
                  <Button className="bg-brand-green hover:bg-opacity-90">
                    Узнать больше
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Our mission"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Алексей Иванов</h3>
                <p className="text-gray-600 mb-2">Основатель и CEO</p>
                <p className="text-gray-500 text-sm">
                  Создал ToolShare с целью сделать инструменты доступными для всех.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Мария Петрова</h3>
                <p className="text-gray-600 mb-2">Технический директор</p>
                <p className="text-gray-500 text-sm">
                  Отвечает за разработку и поддержку платформы.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/55.jpg"
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Дмитрий Сидоров</h3>
                <p className="text-gray-600 mb-2">Менеджер по работе с клиентами</p>
                <p className="text-gray-500 text-sm">
                  Помогает пользователям получить лучший опыт на платформе.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-green text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Присоединяйтесь к нам</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Станьте частью нашего сообщества и помогите сделать мир лучше.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="bg-white text-brand-green hover:bg-white/90">
                  Зарегистрироваться
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 