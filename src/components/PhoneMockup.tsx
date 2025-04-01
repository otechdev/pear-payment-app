import React from 'react';
import Image from 'next/image';

interface PhoneMockupProps {
  children?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PhoneMockup({ children, imageSrc, imageAlt = "Phone screen" }: PhoneMockupProps) {
  return (
    <div className="relative w-[300px] h-[600px] rounded-[40px] overflow-hidden border-[14px] border-black bg-white shadow-xl mx-auto">
      {/* Status bar */}
      <div className="h-7 w-full bg-black relative">
        <div className="absolute top-1 left-0 right-0 mx-auto w-20 h-4 bg-black rounded-b-xl"></div>
      </div>
      
      {/* Display content */}
      <div className="h-[calc(100%-28px)] relative overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        ) : (
          children
        )}
      </div>
      
      {/* Home indicator */}
      <div className="absolute bottom-1 left-0 right-0 mx-auto w-32 h-1 bg-black rounded-full"></div>
    </div>
  );
} 