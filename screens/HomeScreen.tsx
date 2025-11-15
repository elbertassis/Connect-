
import React from 'react';
import type { Provider, ServiceCategory } from '../types';
import ProviderCard from '../components/common/ProviderCard';
import {
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  BeakerIcon,
  SparklesIcon,
  ClockIcon
} from '../components/icons/CategoryIcons';

interface HomeScreenProps {
  providers: Provider[];
  onSelectProvider: (provider: Provider) => void;
}

const categoryMap: { name: ServiceCategory; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
    { name: 'Pintor', icon: PaintBrushIcon },
    { name: 'Mecânico', icon: WrenchScrewdriverIcon },
    { name: 'Eletricista', icon: BoltIcon },
    { name: 'Encanador', icon: BeakerIcon },
    { name: 'Diarista', icon: SparklesIcon },
    { name: 'Serviços Rápidos', icon: ClockIcon },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ providers, onSelectProvider }) => {
  return (
    <div className="p-4 space-y-6">
      <header className="animate-slideUp">
        <h1 className="text-2xl font-bold text-gray-500">Olá, Usuário!</h1>
        <p className="text-3xl font-extrabold text-gray-800">O que você precisa hoje?</p>
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Buscar por serviço ou profissional..."
            className="w-full p-4 pl-12 text-lg border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
          />
          <svg className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
      </header>
      
      <section className="animate-slideUp" style={{ animationDelay: '100ms' }}>
        <h2 className="text-xl font-bold text-gray-700 mb-3">Categorias</h2>
        <div className="grid grid-cols-3 gap-4">
          {categoryMap.map(({ name, icon: Icon }) => (
            <div key={name} className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-md space-y-2 cursor-pointer hover:bg-primary/10 transition">
              <div className="p-3 bg-primary-light rounded-full">
                 <Icon className="w-8 h-8 text-white"/>
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-700 mb-3">Prestadores Próximos</h2>
        <div className="space-y-4">
          {providers.map(provider => (
            <ProviderCard key={provider.id} provider={provider} onClick={() => onSelectProvider(provider)} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
