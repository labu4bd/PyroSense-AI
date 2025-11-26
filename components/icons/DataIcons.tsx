
import React from 'react';

const iconClass = "w-12 h-12";

export const SatelliteIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

export const RadarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.045A9.75 9.75 0 015.25 12a9.75 9.75 0 0110.5 0 4.5 4.5 0 00.98-1.558m-1.96-4.596A9.75 9.75 0 0112 5.25a9.75 9.75 0 016.75 2.652m-13.5 0a4.5 4.5 0 00-1.558.98m1.96 4.596A9.75 9.75 0 005.25 12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    </svg>
);

export const CloudLightningIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-2.087-5.492A3.75 3.75 0 009.75 2.25a4.5 4.5 0 00-6.425 4.755 4.5 4.5 0 00-.8 6.995z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25l-3 3h6l-3 3" />
    </svg>
);
