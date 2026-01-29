import React from 'react';
import { IDoctor } from '@/shared/types';
import { cn } from '@/shared/lib/utils';

interface DoctorCardProps extends IDoctor {
  className?: string;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialization,
  image,
  experience,
  className
}) => {
  return (
    <div className={cn(
      'flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow',
      className
    )}>
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-[#21CDAA] font-medium mb-2">{specialization}</p>
        {experience && (
          <p className="text-sm text-gray-600">Опыт: {experience} лет</p>
        )}
      </div>
    </div>
  );
};
