import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Условия использования</h1>
            
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                Пожалуйста, внимательно прочитайте эти условия использования перед использованием платформы ToolShare.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Общие положения</h2>
              <p className="text-gray-600 mb-6">
                Используя платформу ToolShare, вы соглашаетесь с настоящими условиями использования. Если вы не согласны с какими-либо условиями, пожалуйста, не используйте платформу.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Регистрация и учетная запись</h2>
              <p className="text-gray-600 mb-6">
                Для использования всех функций платформы необходимо зарегистрироваться. Вы обязуетесь предоставить точную и полную информацию при регистрации и поддерживать актуальность этой информации.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Аренда инструментов</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Арендатор обязуется использовать инструменты по назначению и бережно</li>
                <li>Арендодатель обязуется предоставить исправные и безопасные инструменты</li>
                <li>Сроки и условия аренды оговариваются между сторонами</li>
                <li>Ответственность за сохранность инструментов лежит на арендаторе</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Оплата и комиссии</h2>
              <p className="text-gray-600 mb-6">
                Платформа взимает комиссию за каждую успешную транзакцию. Размер комиссии указан в разделе "Тарифы". Оплата производится через защищенную платежную систему.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Ответственность</h2>
              <p className="text-gray-600 mb-6">
                Платформа не несет ответственности за качество предоставляемых инструментов и действия пользователей. Все споры между арендатором и арендодателем решаются самостоятельно.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Конфиденциальность</h2>
              <p className="text-gray-600 mb-6">
                Мы обязуемся защищать ваши персональные данные в соответствии с нашей политикой конфиденциальности.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Изменение условий</h2>
              <p className="text-gray-600 mb-6">
                Мы оставляем за собой право изменять эти условия в любое время. Продолжение использования платформы после внесения изменений означает принятие новых условий.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage; 