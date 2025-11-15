
import React from 'react';
import type { Provider } from '../types';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import { StarIcon } from '../components/icons/GeneralIcons';
import StarRating from '../components/common/StarRating';

interface ProviderProfileScreenProps {
  provider: Provider;
  onBack: () => void;
  onHire: (provider: Provider) => void;
}

const ProviderProfileScreen: React.FC<ProviderProfileScreenProps> = ({ provider, onBack, onHire }) => {
  return (
    <div className="animate-fadeIn">
      <Header title="Perfil do Prestador" onBack={onBack} />
      <div className="relative">
        <img src={provider.portfolio[0] || 'https://picsum.photos/seed/header/600/200'} alt="Portfolio" className="w-full h-48 object-cover"/>
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <img src={provider.photoUrl} alt={provider.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"/>
        </div>
      </div>
      
      <div className="pt-16 p-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900">{provider.name}</h1>
        <p className="text-primary font-semibold text-lg">{provider.category}</p>
        <div className="flex justify-center items-center mt-2">
          <StarRating rating={provider.rating} size="md" />
          <span className="ml-2 text-gray-600 font-medium">{provider.rating.toFixed(1)} ({provider.reviewCount} avaliações)</span>
        </div>
      </div>
      
      <div className="p-4 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Sobre</h2>
          <p className="text-gray-600 leading-relaxed">{provider.description}</p>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Portfólio</h2>
          <div className="grid grid-cols-2 gap-2">
            {provider.portfolio.map((url, index) => (
              <img key={index} src={url} alt={`Portfolio ${index + 1}`} className="w-full h-32 object-cover rounded-lg shadow-sm" />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Avaliações</h2>
          <div className="space-y-4">
            {provider.reviews.slice(0, 2).map(review => (
              <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                   <div>
                    <p className="font-bold text-gray-800">{review.author}</p>
                    <StarRating rating={review.rating} size="sm" />
                   </div>
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="sticky bottom-20 p-4 bg-white/80 backdrop-blur-sm">
          <div className="flex justify-between items-center">
              <div>
                  <p className="text-sm text-gray-500">Preço</p>
                  <p className="text-2xl font-extrabold text-gray-900">
                    R${provider.price} <span className="text-base font-normal text-gray-600">/{provider.priceType}</span>
                  </p>
              </div>
              <div className="w-1/2">
                <Button onClick={() => onHire(provider)}>Contratar</Button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ProviderProfileScreen;
