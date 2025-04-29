import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      title: "Найдите нужный инструмент",
      description: "Просмотрите наш обширный каталог инструментов, доступных для аренды в вашем районе. Поиск по категории, местоположению или конкретному названию инструмента.",
      image: "/tool-share-buddy-hub/Выберите инструмент .png",
      features: [
        "Подробные описания инструментов и качественные фото",
        "Фильтр по местоположению, цене и доступности",
        "Просмотр рейтингов и отзывов других арендаторов",
        "Сравнение различных вариантов"
      ]
    },
    {
      number: 2,
      title: "Забронируйте аренду",
      description: "Как только вы нашли нужный инструмент, выберите даты и отправьте запрос владельцу. Большинство запросов подтверждается в течение нескольких часов.",
      image: "/tool-share-buddy-hub/забронируйтеАренду.png",
      features: [
        "Безопасная обработка платежей через нашу платформу",
        "Гибкие периоды аренды (почасовая, дневная, недельная)",
        "Встроенная система сообщений для общения с владельцами",
        "Цифровой договор аренды для вашего спокойствия"
      ]
    },
    {
      number: 3,
      title: "Получите и используйте",
      description: "Договоритесь о получении инструмента в согласованное время и место. Владелец покажет вам, как им пользоваться, если это необходимо.",
      image: "/tool-share-buddy-hub/Получитеиспользуйте.jpg",
      features: [
        "Возможность бесконтактной передачи",
        "Предоставление инструкций по безопасности",
        "Круглосуточная поддержка клиентов",
        "Страховое покрытие на время использования инструмента"
      ]
    },
    {
      number: 4,
      title: "Верните и оставьте отзыв",
      description: "Верните инструмент в том же состоянии, в котором получили. Поделитесь своим опытом, чтобы помочь сообществу.",
      image: "/tool-share-buddy-hub/Отзыв.png",
      features: [
        "Быстрый и простой процесс возврата",
        "Оперативный возврат залога",
        "Возможность поделиться опытом с сообществом",
        "Создание репутации надежного арендатора"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-beige py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Как работает ToolShare</h1>
              <p className="text-xl text-gray-600 mb-8">
                Аренда инструментов должна быть простой и удобной. Наша платформа соединяет владельцев инструментов с людьми, которым они нужны,
                создавая сообщество совместного использования.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tools">
                  <Button className="bg-brand-green hover:bg-opacity-90 px-6 py-3 w-full sm:w-auto">
                    Найти инструменты
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" className="px-6 py-3 w-full sm:w-auto">
                    Создать аккаунт
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center mb-20 last:mb-0`}>
                <div className="lg:w-1/2">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="rounded-xl shadow-lg w-full h-auto object-cover"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="h-px bg-gray-300 flex-1 ml-4"></div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{step.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <div className="space-y-3">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                          <Check className="w-4 h-4 text-brand-green" />
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Часто задаваемые вопросы</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Остались вопросы о том, как работает ToolShare? Вот ответы на самые распространенные вопросы.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Сколько стоит аренда инструмента?",
                  answer: "Цены на аренду инструментов устанавливаются владельцами и зависят от типа инструмента, его стоимости и срока аренды. Вы можете увидеть цену за час, день или неделю непосредственно в объявлении."
                },
                {
                  question: "Что делать, если инструмент повредился?",
                  answer: "Мы предлагаем дополнительный план защиты, который покрывает случайные повреждения. Если вы не выбрали план защиты, вы несете ответственность за повреждения согласно договору аренды. Всегда внимательно проверяйте инструмент при получении."
                },
                {
                  question: "Как разместить свои инструменты для аренды?",
                  answer: "Просто создайте аккаунт, подтвердите свою личность и нажмите \"Разместить инструмент\" в личном кабинете. Вам нужно будет предоставить фотографии, описание, цены и график доступности для каждого инструмента."
                },
                {
                  question: "Требуется ли залог?",
                  answer: "Да, для большинства инструментов требуется залог, который определяется владельцем исходя из стоимости инструмента. Залог полностью возвращается, когда инструмент возвращается в том же состоянии."
                },
                {
                  question: "Что делать, если инструмент не работает должным образом?",
                  answer: "Если у вас возникли проблемы с арендованным инструментом, немедленно свяжитесь с владельцем через нашу систему сообщений. Если проблему не удается решить, обратитесь в нашу службу поддержки, и мы поможем найти решение или оформить возврат средств."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials (reused component) */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
