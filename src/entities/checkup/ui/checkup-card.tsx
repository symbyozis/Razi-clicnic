'use client';

import React from 'react';
import { ICheckup } from '@/shared/types';
import { Button } from '@/shared/ui';
import { cn } from '@/shared/lib/utils';

interface CheckupCardProps extends ICheckup {
  className?: string;
}

export const CheckupCard: React.FC<CheckupCardProps> = ({
  image,
  name,
  price,
  points,
  link,
  className
}) => {
  return (
    <div className={cn(
      'flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow',
      className
    )}>
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 capitalize">{name}</h3>
        <p className="text-3xl font-bold text-[#21CDAA] mb-4">${price}</p>
        <ul className="mb-6 space-y-2 flex-1">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#21CDAA] mr-2">✓</span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
        <Button
          variant="primary"
          className="w-full"
          onClick={() => window.location.href = link}
        >
          Записаться
        </Button>
      </div>
    </div>
  );
};
