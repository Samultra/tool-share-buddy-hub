import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">О нас</h1>
            
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">
                ToolShare - это инновационная платформа для аренды инструментов, которая соединяет владельцев инструментов с теми, кто в них нуждается. Наша миссия - сделать доступ к качественным инструментам более доступным и удобным для всех.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Наша история</h2>
              <p className="text-gray-600 mb-6">
                Идея ToolShare родилась из простого наблюдения: многие инструменты используются редко, но занимают место и требуют ухода. В то же время, другие люди нуждаются в этих инструментах для своих проектов, но не хотят покупать их навсегда.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Наши ценности</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Доступность - мы делаем качественные инструменты доступными для всех</li>
                <li>Сообщество - мы создаем сообщество взаимопомощи</li>
                <li>Устойчивость - мы способствуем более эффективному использованию ресурсов</li>
                <li>Надежность - мы обеспечиваем безопасность и качество всех транзакций</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Наша команда</h2>
              <p className="text-gray-600 mb-6">
                Наша команда состоит из энтузиастов, которые верят в силу совместного использования и устойчивого развития. Мы постоянно работаем над улучшением платформы и расширением нашего сообщества.
              </p>
              
              <div className="mt-12 text-center">
                <Link to="/contact">
                  <Button size="lg">
                    Связаться с нами
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage; 