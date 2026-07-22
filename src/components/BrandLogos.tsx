import React from 'react';

// Custom clean vector SVG paths for top auto brands
const BRAND_SVGS: Record<string, React.ReactNode> = {
  PORSCHE: (
    <svg className="w-6 h-6 fill-current text-[#00E5FF]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-9h8v2H8zm2-3h4v2h-4z"/>
    </svg>
  ),
  BMW: (
    <svg className="w-6 h-6 fill-current text-[#00E5FF]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1"/>
      <path d="M12 5v14M5 12h14"/>
      <path d="M12 5a7 7 0 0 1 7 7h-7V5z" fill="currentColor"/>
      <path d="M12 12H5a7 7 0 0 1 7-7v7z" fill="none"/>
      <path d="M12 12v7a7 7 0 0 1-7-7h7z" fill="currentColor"/>
    </svg>
  ),
  AUDI: (
    <svg className="w-8 h-5 fill-none stroke-current text-[#00E5FF]" viewBox="0 0 36 16" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
      <circle cx="7" cy="8" r="5" />
      <circle cx="14" cy="8" r="5" />
      <circle cx="21" cy="8" r="5" />
      <circle cx="28" cy="8" r="5" />
    </svg>
  ),
  MERCEDES: (
    <svg className="w-6 h-6 fill-current text-[#00E5FF]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3v9l7.79 4.5M12 12l-7.79 4.5"/>
    </svg>
  ),
  TESLA: (
    <svg className="w-6 h-6 fill-current text-[#00E5FF]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5c2.8 0 5.4.6 7.6 1.7L20 4.2C17.6 3 14.9 2.4 12 2.4S6.4 3 4 4.2l.4 2.5C6.6 5.6 9.2 5 12 5zm-.2 2.8h.4l3.5 10.6-2.2.4-1.5-4.8h-2l-1.5 4.8-2.2-.4 3.5-10.6z"/>
    </svg>
  ),
  CHEVROLET: (
    <svg className="w-7 h-5 fill-current text-[#00E5FF]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10h3V7h10v3h3v4h-3v3H7v-3H4v-4zm4-1v2h8V9H8zm0 4v2h8v-2H8z"/>
    </svg>
  ),
  FORD: (
    <svg className="w-8 h-5 fill-none stroke-current text-[#00E5FF]" viewBox="0 0 28 16" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
      <ellipse cx="14" cy="8" rx="12" ry="6"/>
      <text x="14" y="10" textAnchor="middle" fill="currentColor" stroke="none" fontSize="6" fontWeight="bold" fontFamily="sans-serif">Ford</text>
    </svg>
  ),
  CADILLAC: (
    <svg className="w-6 h-6 fill-current text-[#00E5FF]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4zm0 2.2l6 3v4.8c0 4.4-3 8.6-6 9.8-3-1.2-6-5.4-6-9.8V7.2l6-3z"/>
    </svg>
  )
};

export const BRAND_LOGOS = [
  { name: 'PORSCHE', key: 'PORSCHE', cdnUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/porsche.svg' },
  { name: 'BMW', key: 'BMW', cdnUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bmw.svg' },
  { name: 'AUDI', key: 'AUDI', cdnUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/audi.svg' },
  { name: 'MERCEDES', key: 'MERCEDES', cdnUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mercedes.svg' },
  { name: 'TESLA', key: 'TESLA', cdnUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tesla.svg' },
  { name: 'CHEVROLET', key: 'CHEVROLET', cdnUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/chevrolet.svg' },
  { name: 'FORD', key: 'FORD', cdnUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ford.svg' },
  { name: 'CADILLAC', key: 'CADILLAC', cdnUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cadillac.svg' }
];

export const VehicleBrandStrip: React.FC = () => {
  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-6 text-center">
        Specializing In High-End & Performance Vehicle Platforms
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {BRAND_LOGOS.map((brand, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2.5 px-3.5 py-2 bg-black border border-white/10 hover:border-[#00E5FF]/60 text-neutral-300 hover:text-white transition-all group shadow-md"
          >
            {/* Try CDN logo image first, fallback to vector SVG */}
            <div className="w-5 h-5 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
              <img
                src={brand.cdnUrl}
                alt={`${brand.name} logo`}
                className="w-5 h-5 object-contain filter invert brightness-200 group-hover:brightness-100 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <div className="hidden group-has-[img[style*='display: none']]:block">
                {BRAND_SVGS[brand.key]}
              </div>
            </div>

            <span className="text-xs font-bold tracking-widest uppercase text-neutral-200 group-hover:text-[#00E5FF] transition-colors font-mono">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
