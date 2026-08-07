import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', href, onClick, className = '' }) => {
  const base = 'inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
  const variants = {
    primary: 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-500/25 hover:from-red-700 hover:to-orange-600',
    secondary: 'bg-white border border-red-100 text-slate-900 hover:border-red-200 hover:bg-red-50 hover:text-red-700',
    ghost: 'bg-transparent text-red-600 hover:text-red-700',
    outline: 'bg-transparent border border-red-100 text-red-600 hover:border-red-200 hover:text-red-700',
  };
  const sizes = { sm: 'px-3 py-1 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
  const cls = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
