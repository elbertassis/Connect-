
import React from 'react';
import type { Screen } from '../../types';
import { HomeIcon, ListBulletIcon, UserIcon } from '../icons/GeneralIcons';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const NavItem: React.FC<{
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon: Icon, label, isActive, onClick }) => {
  const activeClasses = 'text-primary';
  const inactiveClasses = 'text-gray-400';

  return (
    <button onClick={onClick} className="flex flex-col items-center justify-center w-full transition-colors">
      <Icon className={`w-7 h-7 mb-1 ${isActive ? activeClasses : inactiveClasses}`} />
      <span className={`text-xs font-medium ${isActive ? activeClasses : inactiveClasses}`}>{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const isHomeScreen = currentScreen === 'home' || currentScreen === 'providerProfile' || currentScreen === 'booking';
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around items-center px-4 rounded-t-2xl">
      <NavItem
        icon={HomeIcon}
        label="Início"
        isActive={isHomeScreen}
        onClick={() => onNavigate('home')}
      />
      <NavItem
        icon={ListBulletIcon}
        label="Histórico"
        isActive={currentScreen === 'userProfile'} // Will navigate to User Profile, which contains history
        onClick={() => onNavigate('userProfile')}
      />
      <NavItem
        icon={UserIcon}
        label="Perfil"
        isActive={currentScreen === 'userProfile'}
        onClick={() => onNavigate('userProfile')}
      />
    </nav>
  );
};

export default BottomNav;
