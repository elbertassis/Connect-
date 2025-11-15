import React, { useState, useEffect } from 'react';
import type { Provider, ServiceRequest } from '../types';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import { ChatBubbleLeftRightIcon, PaperClipIcon } from '../components/icons/GeneralIcons';

interface TrackingScreenProps {
  request: ServiceRequest;
  provider: Provider;
  onComplete: () => void;
}

const TrackingScreen: React.FC<TrackingScreenProps> = ({ request, provider, onComplete }) => {
  const [status, setStatus] = useState(request.status);

  useEffect(() => {
    // Simulate status updates
    // Fix: Use `number` for the setTimeout return type in browsers instead of `NodeJS.Timeout`.
    const timers: number[] = [];
    if (status === 'Aguardando confirmação') {
      timers.push(window.setTimeout(() => setStatus('Em execução'), 3000));
    }
    return () => timers.forEach(clearTimeout);
  }, [status]);
  
  const statusSteps = ['Aguardando confirmação', 'Em execução', 'Concluído'];
  const currentStepIndex = statusSteps.indexOf(status);

  return (
    <div className="animate-fadeIn h-full flex flex-col">
      <Header title="Acompanhamento" />
      <div className="p-4 space-y-6 flex-grow">
        <div className="text-center">
          <img src={provider.photoUrl} alt={provider.name} className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary shadow-lg"/>
          <h2 className="text-2xl font-bold mt-4">{provider.name}</h2>
          <p className="text-gray-500">{provider.category}</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">Status do Serviço</h3>
          <div className="flex justify-between items-center px-2">
            {statusSteps.map((step, index) => (
              <div key={step} className="flex flex-col items-center z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${index <= currentStepIndex ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {index < currentStepIndex ? '✓' : index + 1}
                </div>
                <p className={`mt-2 text-xs text-center font-semibold ${index <= currentStepIndex ? 'text-primary' : 'text-gray-500'}`}>{step}</p>
              </div>
            ))}
          </div>
           <div className="relative w-10/12 mx-auto h-1 bg-gray-200 -mt-8">
                <div className="absolute top-0 left-0 h-1 bg-primary transition-all duration-500" style={{width: `${(currentStepIndex / (statusSteps.length -1)) * 100}%`}}></div>
            </div>
        </div>

        <div className="flex-grow flex flex-col bg-white rounded-2xl shadow-md p-4 space-y-4">
            <h3 className="text-lg font-bold text-gray-700 flex items-center gap-2"><ChatBubbleLeftRightIcon className="w-6 h-6"/> Chat com {provider.name.split(' ')[0]}</h3>
            <div className="flex-grow bg-gray-100 rounded-lg p-2 space-y-2 overflow-y-auto">
                {/* Mock chat messages */}
                <div className="p-2 bg-primary text-white rounded-lg rounded-br-none self-end max-w-xs ml-auto">Olá! Já estou a caminho.</div>
                <div className="p-2 bg-gray-200 text-gray-800 rounded-lg rounded-bl-none self-start max-w-xs">Ótimo, aguardando!</div>
            </div>
            <div className="flex items-center gap-2">
                <button className="p-2 text-gray-500 hover:text-primary"><PaperClipIcon className="w-6 h-6"/></button>
                <input type="text" placeholder="Digite sua mensagem..." className="flex-grow p-2 border border-gray-300 rounded-full px-4"/>
                <button className="p-2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                </button>
            </div>
        </div>
      </div>
      <div className="p-4 bg-white border-t">
        <Button onClick={onComplete} disabled={status !== 'Em execução'}>Serviço Concluído</Button>
      </div>
    </div>
  );
};

export default TrackingScreen;