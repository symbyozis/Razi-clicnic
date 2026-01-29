'use client';

import React from 'react';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { MainCarousel } from '@/widgets/main-carousel';
import { DoctorsCarousel } from '@/widgets/doctors-carousel';
import { ReviewsCarousel } from '@/widgets/reviews-carousel';
import { NewsCarousel } from '@/widgets/news-carousel';
import { ServiceItemCard } from '@/entities/service';
import { CheckupCard } from '@/entities/checkup';
import { Container, Button } from '@/shared/ui';
import { IServiceItem, ICheckup } from '@/shared/types';

const serviceItems: IServiceItem[] = [
  {
    image: '/page-main/icon-02.png',
    title: 'Стоматология',
    text: 'Полный спектр стоматологических услуг для всей семьи',
  },
  {
    image: '/page-main/icon-01.png',
    title: 'Кардиология',
    text: 'Диагностика и лечение заболеваний сердечно-сосудистой системы',
  },
  {
    image: '/page-main/icon-03.png',
    title: 'Неврология',
    text: 'Комплексное обследование и лечение неврологических заболеваний',
  },
  {
    image: '/page-main/icon-04.png',
    title: 'Офтальмология',
    text: 'Современная диагностика и лечение заболеваний глаз',
  },
];

const checkups: ICheckup[] = [
  {
    image: 'https://placehold.co/900/21CDAA/white?text=Checkup',
    name: 'Базовый осмотр',
    price: 150,
    points: [
      'Консультация терапевта',
      'Общий анализ крови',
      'ЭКГ',
      'Измерение давления',
    ],
    link: '#',
  },
  {
    image: 'https://placehold.co/900/21CDAA/white?text=Checkup',
    name: 'Расширенный',
    price: 200,
    points: [
      'Консультация 3 специалистов',
      'Комплекс анализов',
      'УЗИ исследование',
      'Рекомендации по лечению',
    ],
    link: '#',
  },
  {
    image: 'https://placehold.co/900/21CDAA/white?text=Checkup',
    name: 'VIP программа',
    price: 300,
    points: [
      'Консультация всех специалистов',
      'Полный комплекс анализов',
      'МРТ/КТ исследование',
      'Индивидуальная программа',
    ],
    link: '#',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pb-12">
          <Container>
            <MainCarousel />
          </Container>
        </section>

        {/* Services Section */}
        <section className="py-12 bg-gray-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  Почему пациенты выбирают нашу клинику?
                </h2>
                <p className="text-gray-600 mb-6">
                  Мы предлагаем высококачественные медицинские услуги с использованием
                  современного оборудования и передовых методик лечения.
                </p>
                <Button variant="primary">Узнать больше</Button>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceItems.map((item) => (
                    <ServiceItemCard
                      key={item.title}
                      image={item.image}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Checkups Section */}
        <section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Программы медицинского осмотра
              </h2>
              <p className="text-gray-600 text-lg">
                Выберите подходящую для вас программу обследования
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {checkups.map((checkup) => (
                <CheckupCard key={checkup.name} {...checkup} />
              ))}
            </div>
          </Container>
        </section>

        {/* Doctors Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Наши специалисты
              </h2>
              <p className="text-gray-600 text-lg">
                Опытные врачи с многолетней практикой
              </p>
            </div>
            <DoctorsCarousel />
          </Container>
        </section>

        {/* Reviews Section */}
        <section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Отзывы пациентов
              </h2>
              <p className="text-gray-600 text-lg">
                Что говорят о нас наши пациенты
              </p>
            </div>
            <ReviewsCarousel />
          </Container>
        </section>

        {/* News Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Новости и акции
              </h2>
              <p className="text-gray-600 text-lg">
                Будьте в курсе последних новостей клиники
              </p>
            </div>
            <NewsCarousel />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
