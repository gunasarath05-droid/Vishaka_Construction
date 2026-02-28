import React from 'react';

const SectionTitle = ({ title, subtitle, alignment = 'center' }) => {
  const alignmentClasses = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    right: 'items-end text-right',
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[alignment]} mb-16`}>
      <div className="flex items-center gap-2 mb-4">
        <div className="h-[1px] w-8 bg-primary"></div>
        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">{subtitle}</span>
        <div className="h-[1px] w-8 bg-primary"></div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark tracking-tighter leading-tight max-w-2xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
