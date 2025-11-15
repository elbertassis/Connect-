
import React from 'react';
import Header from '../components/common/Header';
import { ChevronLeftIcon } from '../components/icons/GeneralIcons';

const UserProfileScreen: React.FC = () => {
    
  const menuItems = [
    { label: 'Histórico de serviços', icon: 'M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662v.159c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.092-1.21.138-2.43.138-3.662v-.159Z' },
    { label: 'Favoritos', icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z' },
    { label: 'Endereços salvos', icon: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z' },
    { label: 'Pagamentos salvos', icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m-3-10.5V5.25a2.25 2.25 0 0 1 2.25-2.25h3.75a2.25 2.25 0 0 1 2.25 2.25v2.25' },
    { label: 'Configurações', icon: 'M9.594 3.94c.09-.542.56-1.008 1.11-1.226a3.75 3.75 0 0 1 2.59 0c.55.218 1.02.684 1.11 1.226l.094.546a3.75 3.75 0 0 1 4.238 2.658l.26.908a3.75 3.75 0 0 1-1.14 4.114l-.69.69a3.75 3.75 0 0 1-4.115 1.14l-.908-.26a3.75 3.75 0 0 1-2.658-4.238l-.546-.094a3.75 3.75 0 0 1-1.226-1.11 3.75 3.75 0 0 1 0-2.59c.218-.55.684-1.02 1.226-1.11l.546-.094a3.75 3.75 0 0 1 2.658-4.238l.908-.26a3.75 3.75 0 0 1 4.114 1.14l.69.69a3.75 3.75 0 0 1 1.14 4.115l-.26.908a3.75 3.75 0 0 1-4.238 2.658l-.908.26a3.75 3.75 0 0 1-4.114-1.14l-.69-.69a3.75 3.75 0 0 1-1.14-4.114l.26-.908a3.75 3.75 0 0 1 4.238-2.658l.908.26Z' },
    { label: 'Suporte', icon: 'M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z' }
  ];

  return (
    <div className="animate-fadeIn">
      <Header title="Meu Perfil" />
      <div className="p-4">
        <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm">
            <img src="https://picsum.photos/seed/user/200/200" alt="User" className="w-20 h-20 rounded-full object-cover"/>
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Usuário</h1>
                <p className="text-gray-500">ver e editar perfil</p>
            </div>
        </div>
        
        <div className="mt-6 bg-white rounded-2xl shadow-sm overflow-hidden">
            {menuItems.map((item, index) => (
                <div key={item.label} className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 ${index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                        <span className="text-lg font-medium text-gray-700">{item.label}</span>
                    </div>
                     <ChevronLeftIcon className="w-5 h-5 text-gray-400 transform rotate-180" />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileScreen;
