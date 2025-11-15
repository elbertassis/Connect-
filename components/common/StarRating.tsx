
import React from 'react';
import { StarIcon } from '../icons/GeneralIcons';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onRatingChange && onRatingChange(star)}
          disabled={!onRatingChange}
          className={`transition-transform transform ${onRatingChange ? 'hover:scale-125 active:scale-110' : ''}`}
        >
          <StarIcon
            className={`${sizeClasses[size]} ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            filled={star <= rating}
            stroke={star > rating ? 'currentColor' : 'none'}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
