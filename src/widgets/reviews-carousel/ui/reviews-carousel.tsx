'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { IReview } from '@/shared/types';
import { Rating } from 'primereact/rating';

import 'swiper/css';
import 'swiper/css/pagination';

interface ReviewsCarouselProps {
  reviews?: IReview[];
}

const defaultReviews: IReview[] = [
  {
    author: 'Алексей М.',
    text: 'Отличная клиника! Профессиональные врачи, современное оборудование. Очень доволен качеством обслуживания.',
    rating: 5,
    date: '15.01.2026',
  },
  {
    author: 'Ольга К.',
    text: 'Обращалась к стоматологу. Все прошло быстро и безболезненно. Рекомендую!',
    rating: 5,
    date: '12.01.2026',
  },
  {
    author: 'Дмитрий С.',
    text: 'Хорошая клиника, удобное расположение. Врачи внимательные и квалифицированные.',
    rating: 4,
    date: '10.01.2026',
  },
];

export const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({
  reviews = defaultReviews,
}) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-lg text-gray-900">{review.author}</h4>
              <Rating value={review.rating} readOnly cancel={false} className="text-[#21CDAA]" />
            </div>
            <p className="text-gray-700 flex-1 mb-4">{review.text}</p>
            {review.date && (
              <p className="text-sm text-gray-500">{review.date}</p>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
