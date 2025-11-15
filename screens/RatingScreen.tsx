
import React, { useState } from 'react';
import type { Provider, ServiceRequest } from '../types';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import StarRating from '../components/common/StarRating';
import { CameraIcon } from '../components/icons/GeneralIcons';

interface RatingScreenProps {
  service: {
    provider: Provider;
    request: ServiceRequest;
  };
  onSubmit: () => void;
}

const RatingScreen: React.FC<RatingScreenProps> = ({ service, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="animate-fadeIn">
      <Header title="Avalie o Serviço" />
      <div className="p-4 space-y-6 text-center">
        <img src={service.provider.photoUrl} alt={service.provider.name} className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"/>
        <h2 className="text-xl font-bold">Como foi o serviço de {service.provider.name}?</h2>
        <p className="text-gray-500">Sua avaliação é muito importante para nós e para a comunidade.</p>
        
        <div className="flex justify-center">
            <StarRating rating={rating} onRatingChange={setRating} size="lg" />
        </div>
        
        <div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            placeholder="Deixe um comentário sobre sua experiência..."
            className="w-full p-3 border border-gray-300 rounded-lg text-left"
          />
        </div>

        <div>
            <h3 className="text-lg font-bold text-gray-700 mb-2 text-left">Foto do resultado (opcional)</h3>
            <label htmlFor="result-photo-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                {photoPreview ? (
                    <img src={photoPreview} alt="Result Preview" className="h-full w-full object-cover rounded-lg" />
                ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
                        <CameraIcon className="w-8 h-8 mb-2" />
                        <p className="text-sm">Envie uma foto do serviço finalizado</p>
                    </div>
                )}
                <input id="result-photo-upload" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
            </label>
        </div>
        
        <div className="pt-4">
            <Button onClick={onSubmit} disabled={rating === 0}>Enviar Avaliação</Button>
        </div>
      </div>
    </div>
  );
};

export default RatingScreen;
