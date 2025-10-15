import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-12 text-center sm:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
        {children}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-20 h-1 bg-cyan-400"></span>
      </h2>
  </div>
);

export default SectionTitle;