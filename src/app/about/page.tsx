'use client';

import React from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { Container, Button } from '@/shared/ui';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16">
          <Container>
            <h1 className="text-5xl font-bold mb-8 text-gray-900">О нас</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Razi Clinic
                </h2>
                <p className="text-gray-600 mb-4">
                  Современная медицинская клиника, которая предоставляет широкий спектр
                  медицинских услуг для всей семьи. Мы работаем с 2010 года и за это время
                  заслужили доверие тысяч пациентов.
                </p>
                <p className="text-gray-600 mb-4">
                  Наша команда состоит из высококвалифицированных специалистов с многолетним
                  опытом работы. Мы используем современное оборудование и передовые методики
                  диагностики и лечения.
                </p>
                <p className="text-gray-600 mb-6">
                  Индивидуальный подход к каждому пациенту, внимательное отношение и
                  профессионализм - наши главные принципы работы.
                </p>
                <Button variant="primary" size="lg">
                  Записаться на прием
                </Button>
              </div>
              <div>
                <img
                  src="https://placehold.co/600x800/21CDAA/white?text=About+Us"
                  alt="О клинике"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Наши преимущества
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-5xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-2">Современное оборудование</h3>
                <p className="text-gray-600">
                  Используем новейшее медицинское оборудование
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-5xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-bold mb-2">Опытные специалисты</h3>
                <p className="text-gray-600">
                  Врачи высшей категории с большим опытом
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-xl font-bold mb-2">Удобный график</h3>
                <p className="text-gray-600">
                  Работаем 7 дней в неделю для вашего удобства
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
