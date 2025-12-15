import React from 'react';

const BackgroundGradient = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden bg-champagne">
      {/* Blob 1: Champagne */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-champagne rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
      />
      
      {/* Blob 2: Mist */}
      <div 
        className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-mist rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Blob 3: Blush */}
      <div 
        className="absolute -bottom-8 left-20 w-[70vw] h-[70vw] bg-blush rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
        style={{ animationDelay: '4s' }}
      />

      {/* Noise Overlay (Optional for texture) */}
      <div className='absolute inset-0 opacity-[0.03] pointer-events-none' 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};

export default BackgroundGradient;
