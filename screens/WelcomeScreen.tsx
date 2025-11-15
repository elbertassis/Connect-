
import React from 'react';
import LogoIcon from '../components/icons/LogoIcon';
import Button from '../components/common/Button';

interface WelcomeScreenProps {
  onNavigate: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full w-full flex flex-col justify-between items-center p-8 bg-gradient-to-br from-primary-light to-primary">
      <div className="flex-1 flex flex-col justify-center items-center text-center text-white animate-fadeIn">
        <LogoIcon className="w-32 h-32 mb-4" />
        <h1 className="text-5xl font-extrabold tracking-tight">ServiGo</h1>
        <p className="mt-2 text-lg text-primary-light">Conectando você aos melhores profissionais.</p>
      </div>
      <div className="w-full max-w-sm space-y-4 animate-slideUp">
        <Button variant="secondary" onClick={onNavigate}>Entrar</Button>
        <Button variant="outline" className="bg-white/90 text-primary-dark border-none" onClick={onNavigate}>Criar conta</Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
