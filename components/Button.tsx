
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  to,
  onClick,
  children,
  variant = 'primary',
  fullWidth = false,
}) => {
  const baseClasses = "px-8 py-3 font-bold rounded-md text-center transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark";
  
  const variantClasses = {
    primary: "bg-brand-accent text-brand-dark hover:bg-white hover:shadow-lg focus:ring-brand-accent",
    secondary: "bg-transparent border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark focus:ring-brand-accent",
  };

  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  const className = `${baseClasses} ${variantClasses[variant]} ${widthClass}`;

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
