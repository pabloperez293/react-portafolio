import React from 'react';

const SectionHeader = ({ id, title, subtitle }) => {
  return (
    <header id={id} className="mb-8">
      <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
        {title}
      </h2>
      {subtitle && (
        <p data-aos="fade-up" data-aos-delay="80" className="mt-2 text-slate-600 max-w-xl">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
