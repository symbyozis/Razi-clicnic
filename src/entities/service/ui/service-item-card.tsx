import React from 'react';
import { IServiceItem } from '@/shared/types';
import { cn } from '@/shared/lib/utils';

interface ServiceItemCardProps extends IServiceItem {
  className?: string;
}

export const ServiceItemCard: React.FC<ServiceItemCardProps> = ({
  image,
  title,
  text,
  className
}) => {
  return (
    <div className={cn(
      'flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow',
      className
    )}>
      <img src={image} alt={title} className="w-16 h-16 mb-4 object-contain" />
      <h6 className="text-lg font-semibold mb-2 text-gray-900">{title}</h6>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
};
