import React, { useState } from 'react';
import type { Provider } from '../types';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
// Fix: Import SparklesIcon from the correct module 'CategoryIcons'.
import { CameraIcon } from '../components/icons/GeneralIcons';
import { SparklesIcon } from '../components/icons/CategoryIcons';
import { generateServiceDescription } from '../services/geminiService';


interface BookingScreenProps {
  provider: Provider;
  onBack: () => void;
  onConfirm: (request: { dateTime: Date; details: string; photo?: string; price: number }) => void;
}

const BookingScreen: React.FC<BookingScreenProps> = ({ provider, onBack, onConfirm }) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('09:00');
  const [details, setDetails] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);


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

  const handleGenerateDescription = async () => {
    if (!details.trim()) return;
    setIsGenerating(true);
    const generated = await generateServiceDescription(details);
    setDetails(generated);
    setIsGenerating(false);
  }

  const handleConfirm = () => {
    const dateTime = new Date(`${date}T${time}`);
    onConfirm({
      dateTime,
      details,
      photo: photoPreview || undefined,
      price: provider.price,
    });
  };

  return (
    <div className="animate-fadeIn">
      <Header title="Agendamento" onBack={onBack} />
      <div className="p-4 space-y-6">
        <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
          <img src={provider.photoUrl} alt={provider.name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <p className="text-gray-500">Você está contratando</p>
            <h2 className="text-xl font-bold text-gray-800">{provider.name}</h2>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">Selecione data e horário</h3>
          <div className="grid grid-cols-2 gap-4">
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg"/>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg"/>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-2">Especifique o serviço</h3>
          <div className="relative">
            <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                placeholder="Ex: Instalar chuveiro novo, consertar vazamento na pia da cozinha..."
                className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button 
                onClick={handleGenerateDescription}
                disabled={isGenerating || !details.trim()}
                className="absolute bottom-2 right-2 flex items-center gap-1 text-sm bg-primary/20 text-primary-dark font-semibold px-2 py-1 rounded-md disabled:opacity-50"
            >
              {isGenerating ? 'Gerando...' : <>
                <SparklesIcon className="w-4 h-4"/> Gerar com IA
              </>}
            </button>
          </div>
        </div>

        <div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">Anexar foto (opcional)</h3>
            <label htmlFor="photo-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                {photoPreview ? (
                    <img src={photoPreview} alt="Preview" className="h-full w-full object-cover rounded-lg" />
                ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
                        <CameraIcon className="w-8 h-8 mb-2" />
                        <p className="text-sm">Clique para enviar uma foto</p>
                    </div>
                )}
                <input id="photo-upload" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
            </label>
        </div>
        
        <div className="p-4 bg-primary/10 rounded-lg text-center">
            <p className="text-gray-600">Valor estimado</p>
            <p className="text-3xl font-extrabold text-primary">
                R${provider.price} <span className="text-lg font-medium">/{provider.priceType}</span>
            </p>
        </div>
        
        <Button onClick={handleConfirm} disabled={!date || !time || !details.trim()}>Confirmar Solicitação</Button>
      </div>
    </div>
  );
};

export default BookingScreen;