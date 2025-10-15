
import React from 'react';

const CodeforcesIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 9l4 4 4-4" />
    <path d="M12 13v5" />
    <path d="M8 18h8" />
  </svg>
);

export default CodeforcesIcon;
