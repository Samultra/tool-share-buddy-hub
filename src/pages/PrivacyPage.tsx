import React from 'react';
import { Container } from "../components/ui/container";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Container>
          <div className="py-16 space-y-8">
            <h1 className="text-3xl font-bold text-center">Политика конфиденциальности</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Общие положения</h2>
                <p>
                  Настоящая Политика конфиденциальности (далее - "Политика") описывает, как ToolShare 
                  (далее - "Платформа") собирает, использует и защищает персональные данные пользователей 
                  (далее - "Пользователи").
                </p>
                <p>
                  Используя Платформу, вы соглашаетесь с условиями настоящей Политики. Если вы не согласны 
                  с какими-либо положениями Политики, вы не должны использовать Платформу.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. Собираемая информация</h2>
                <p>
                  Платформа собирает следующую информацию о Пользователях:
                </p>
                <ul className="list-disc list-inside">
                  <li>Имя и контактные данные</li>
                  <li>Информация об учетной записи</li>
                  <li>История аренд и транзакций</li>
                  <li>IP-адрес и данные об устройстве</li>
                  <li>Информация о местоположении</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">3. Использование информации</h2>
                <p>
                  Собранная информация используется для:
                </p>
                <ul className="list-disc list-inside">
                  <li>Предоставления услуг Платформы</li>
                  <li>Улучшения качества сервиса</li>
                  <li>Обработки платежей</li>
                  <li>Коммуникации с Пользователями</li>
                  <li>Предотвращения мошенничества</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">4. Защита данных</h2>
                <p>
                  Платформа принимает все необходимые меры для защиты персональных данных Пользователей, 
                  включая:
                </p>
                <ul className="list-disc list-inside">
                  <li>Использование шифрования данных</li>
                  <li>Регулярное обновление систем безопасности</li>
                  <li>Ограничение доступа к данным</li>
                  <li>Обучение сотрудников вопросам безопасности</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">5. Права Пользователей</h2>
                <p>
                  Пользователи имеют право:
                </p>
                <ul className="list-disc list-inside">
                  <li>Получать доступ к своим персональным данным</li>
                  <li>Запрашивать исправление неточных данных</li>
                  <li>Запрашивать удаление данных</li>
                  <li>Отказываться от обработки данных</li>
                  <li>Получать копию своих данных</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">6. Cookies и аналогичные технологии</h2>
                <p>
                  Платформа использует cookies и аналогичные технологии для улучшения работы сервиса, 
                  анализа использования и персонализации контента. Пользователи могут управлять настройками 
                  cookies через свой браузер.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">7. Изменения в Политике</h2>
                <p>
                  Платформа оставляет за собой право вносить изменения в настоящую Политику. О всех 
                  изменениях Пользователи будут уведомлены через сайт или по электронной почте.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">8. Контакты</h2>
                <p>
                  По всем вопросам, связанным с настоящей Политикой конфиденциальности, вы можете 
                  обращаться по адресу privacy@toolshare.ru или по телефону +7 (495) 123-45-67.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
} 