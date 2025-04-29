import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Как правильно выбрать электроинструмент для дома",
      excerpt: "В этой статье мы расскажем о ключевых критериях выбора электроинструментов для домашнего использования.",
      imageUrl: "https://images.unsplash.com/photo-1526714719019-b3032b5b5aac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Алексей Петров",
      date: "15 марта 2024",
      readTime: "5 мин",
      category: "Советы"
    },
    {
      id: 2,
      title: "Топ-10 инструментов для начинающего мастера",
      excerpt: "Список основных инструментов, которые пригодятся каждому, кто только начинает заниматься ремонтом и строительством.",
      imageUrl: "https://images.unsplash.com/photo-1550985543-49bee3167284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Мария Иванова",
      date: "10 марта 2024",
      readTime: "7 мин",
      category: "Обзоры"
    },
    {
      id: 3,
      title: "Как правильно ухаживать за садовыми инструментами",
      excerpt: "Простые советы по уходу за садовыми инструментами, которые помогут продлить их срок службы.",
      imageUrl: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Дмитрий Сидоров",
      date: "5 марта 2024",
      readTime: "4 мин",
      category: "Советы"
    },
    {
      id: 4,
      title: "Безопасность при работе с электроинструментами",
      excerpt: "Важные правила техники безопасности, которые необходимо соблюдать при работе с электроинструментами.",
      imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      author: "Анна Козлова",
      date: "1 марта 2024",
      readTime: "6 мин",
      category: "Безопасность"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="py-16 bg-brand-beige">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">Блог</h1>
              <p className="text-xl text-gray-600">
                Полезные статьи и советы по использованию инструментов
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <Link to={`/blog/${post.id}`}>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-brand-green transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-brand-green">{post.category}</span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-sm font-medium text-brand-green hover:text-opacity-80"
                      >
                        Читать далее →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Подпишитесь на нашу рассылку</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Получайте свежие статьи и советы прямо на почту
            </p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Ваш email адрес"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
              />
              <button
                type="submit"
                className="bg-brand-green text-white px-6 py-3 rounded-r-lg hover:bg-opacity-90"
              >
                Подписаться
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog; 