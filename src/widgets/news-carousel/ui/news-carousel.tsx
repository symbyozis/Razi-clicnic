'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { INews } from '@/shared/types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface NewsCarouselProps {
  news?: INews[];
}

const defaultNews: INews[] = [
  {
    title: 'Новое оборудование',
    description: 'В нашей клинике установлено новейшее диагностическое оборудование',
    image: 'https://placehold.co/800x600/21CDAA/white?text=News',
    date: '25.01.2026',
    link: '/news/1',
  },
  {
    title: 'Акция на медосмотр',
    description: 'Комплексный медицинский осмотр со скидкой 20%',
    image: 'https://placehold.co/800x600/21CDAA/white?text=News',
    date: '20.01.2026',
    link: '/news/2',
  },
  {
    title: 'Новый специалист',
    description: 'К нам присоединился опытный кардиолог высшей категории',
    image: 'https://placehold.co/800x600/21CDAA/white?text=News',
    date: '15.01.2026',
    link: '/news/3',
  },
];

export const NewsCarousel: React.FC<NewsCarouselProps> = ({
  news = defaultNews,
}) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {news.map((item, index) => (
        <SwiperSlide key={index}>
          <a href={item.link} className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-[#21CDAA] mb-2">{item.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#21CDAA] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
