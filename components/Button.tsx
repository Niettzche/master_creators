
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
  const baseClasses = "px-8 py-3 font-bold rounded-md text-center transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:shadow-lg focus:ring-primary",
    secondary: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary",
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
