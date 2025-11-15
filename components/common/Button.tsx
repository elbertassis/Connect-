
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseClasses = 'w-full text-lg font-semibold rounded-full px-6 py-3 transition-transform transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-blue-500/30',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-orange-500/30',
    outline: 'bg-white text-primary border-2 border-primary hover:bg-primary/10',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
