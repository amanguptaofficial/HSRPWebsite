import React from 'react';

const SmallCheckIcon = ({ size = 17,color = 'darkgreen' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: `${size}px`, height: `${size}px`, fontFamily:'sans-serif' }}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default SmallCheckIcon;
