
import React from 'react';
import { ChevronLeftIcon } from '../icons/GeneralIcons';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className="sticky top-0 bg-gray-50/80 backdrop-blur-sm z-10 p-4 flex items-center justify-center">
      {onBack && (
        <button onClick={onBack} className="absolute left-4 p-2 rounded-full hover:bg-gray-200">
          <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
        </button>
      )}
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
    </header>
  );
};

export default Header;
