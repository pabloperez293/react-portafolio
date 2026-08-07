import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', href, onClick, className = '' }) => {
  const base = 'inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white';
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-600 to-indigo-400 text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-700 hover:to-indigo-600',
    secondary: 'bg-white border border-indigo-100 text-slate-900 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700',
    ghost: 'bg-transparent text-indigo-600 hover:text-indigo-700',
    outline: 'bg-transparent border border-indigo-100 text-indigo-600 hover:border-indigo-200 hover:text-indigo-700',
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
