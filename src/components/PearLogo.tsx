import React from 'react';

interface PearLogoProps {
  className?: string;
  size?: number | string;
  primaryColor?: string;
  secondaryColor?: string;
}

export default function PearLogo({
  className = '',
  size = 50,
  primaryColor = '#4CBFB6',
  secondaryColor = '#9AE3DC'
}: PearLogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <rect x="10" y="10" width="80" height="40" rx="20" fill={primaryColor} />
        <rect x="10" y="50" width="40" height="40" fill={secondaryColor} />
      </svg>
    </div>
  );
} 