'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { DoctorCard } from '@/entities/doctor';
import { IDoctor } from '@/shared/types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface DoctorsCarouselProps {
  doctors?: IDoctor[];
}

const defaultDoctors: IDoctor[] = [
  {
    name: 'Иванов Иван Иванович',
    specialization: 'Кардиолог',
    image: 'https://placehold.co/400x500/21CDAA/white?text=Doctor',
    experience: 15,
  },
  {
    name: 'Петрова Анна Сергеевна',
    specialization: 'Стоматолог',
    image: 'https://placehold.co/400x500/21CDAA/white?text=Doctor',
    experience: 10,
  },
  {
    name: 'Сидоров Петр Александрович',
    specialization: 'Невролог',
    image: 'https://placehold.co/400x500/21CDAA/white?text=Doctor',
    experience: 12,
  },
  {
    name: 'Козлова Мария Дмитриевна',
    specialization: 'Офтальмолог',
    image: 'https://placehold.co/400x500/21CDAA/white?text=Doctor',
    experience: 8,
  },
];

export const DoctorsCarousel: React.FC<DoctorsCarouselProps> = ({
  doctors = defaultDoctors,
}) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{
        delay: 4000,
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
      {doctors.map((doctor, index) => (
        <SwiperSlide key={index}>
          <DoctorCard {...doctor} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
