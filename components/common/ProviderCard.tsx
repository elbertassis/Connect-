
import React from 'react';
import type { Provider } from '../../types';
import { StarIcon, MapPinIcon } from '../icons/GeneralIcons';

interface ProviderCardProps {
  provider: Provider;
  onClick: () => void;
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex items-center p-4 space-x-4 cursor-pointer transition-all hover:shadow-xl hover:scale-105 animate-slideUp"
      style={{ animationDelay: `${provider.id}00ms` }}
    >
      <img
        src={provider.photoUrl}
        alt={provider.name}
        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">{provider.name}</h3>
        <p className="text-sm text-primary font-semibold">{provider.category}</p>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="font-bold text-gray-700">{provider.rating.toFixed(1)}</span>
          <span className="ml-1">({provider.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <MapPinIcon className="w-4 h-4 text-gray-400 mr-1" />
          <span>{provider.distance} km de distância</span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-extrabold text-primary">R${provider.price}</p>
        <p className="text-xs text-gray-500">/{provider.priceType}</p>
      </div>
    </div>
  );
};

export default ProviderCard;
