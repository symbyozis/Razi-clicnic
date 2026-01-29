import React from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Container } from '@/shared/ui';
import { phoneFormat } from '@/shared/lib/phone-format';
import appConfig from '@/shared/config/app.config.json';

export default function ContactsPage() {
  const { contacts } = appConfig;

  return (
    <>
      <Header />
      <main>
        <section className="py-16">
          <Container>
            <h1 className="text-5xl font-bold mb-12 text-gray-900">Контакты</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Свяжитесь с нами
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-[#21CDAA] text-2xl mr-4">📞</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                      <a
                        href={`tel:${contacts.phone}`}
                        className="text-gray-600 hover:text-[#21CDAA] transition-colors"
                      >
                        {phoneFormat(contacts.phone)}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#21CDAA] text-2xl mr-4">📧</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a
                        href={`mailto:${contacts.email}`}
                        className="text-gray-600 hover:text-[#21CDAA] transition-colors"
                      >
                        {contacts.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#21CDAA] text-2xl mr-4">📍</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-gray-600">{contacts.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#21CDAA] text-2xl mr-4">🕒</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>Пн-Пт: 8:00 - 20:00</li>
                        <li>Сб: 9:00 - 18:00</li>
                        <li>Вс: 9:00 - 15:00</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-200 rounded-xl h-[500px] flex items-center justify-center">
                  <p className="text-gray-600">Карта</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
