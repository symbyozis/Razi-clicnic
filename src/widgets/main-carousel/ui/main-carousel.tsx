'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@/shared/ui';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    title: 'Современная медицина для всей семьи',
    description: 'Профессиональная медицинская помощь на высшем уровне',
    image: '/page-main/slide-1.jpg',
  },
  {
    id: 2,
    title: 'Опытные специалисты',
    description: 'Команда врачей с многолетним опытом работы',
    image: '/page-main/slide-2.jpg',
  },
  {
    id: 3,
    title: 'Современное оборудование',
    description: 'Используем передовые технологии диагностики и лечения',
    image: '/page-main/slide-3.jpg',
  },
];

export const MainCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="rounded-2xl overflow-hidden shadow-2xl"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/1200x500/21CDAA/white?text=Razi+Clinic';
              }}
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-12 text-white">
              <h1 className="text-5xl font-bold mb-4 max-w-2xl">{slide.title}</h1>
              <p className="text-xl mb-8 max-w-xl">{slide.description}</p>
              <div>
                <Button size="lg" variant="primary">
                  Записаться на прием
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
