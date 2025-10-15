
import React from 'react';

const TrophyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 0 1-4.874-1.971l.242.312a11.25 11.25 0 0 1 4.632-1.971h9.132c1.753 0 3.32.634 4.632 1.971l.242-.312A9.75 9.75 0 0 1 16.5 18.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75a3.375 3.375 0 0 0-3.375 3.375v1.5c0 .621-.504 1.125-1.125 1.125h-1.5a3.375 3.375 0 0 0-3.375 3.375v2.625m16.5 0h3.375c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-3.375m-16.5 0H1.5c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h3.375m16.5 0v1.125c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5m-1.5-1.125H9.75m0 0v1.125c0 .621-.504 1.125-1.125 1.125h-1.5A1.125 1.125 0 0 1 6 16.875v-1.5m0 0h1.5m9-2.25h-4.5" />
    </svg>
);

export default TrophyIcon;
