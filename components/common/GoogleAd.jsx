import React, { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

const GoogleAd = ({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  style = { display: 'block' },
  className = ""
}) => {
  const { isDark } = useTheme();

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-container my-8 overflow-hidden rounded-xl border ${isDark ? 'border-white/5 bg-white/5' : 'border-gray-100 bg-gray-50/50'} ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-inherit">
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Advertisement</span>
        <span className="text-[10px] font-medium opacity-30">Ads by Google</span>
      </div>
      <div className="p-4 flex justify-center items-center min-h-[100px]">
        <ins
          className="adsbygoogle"
          style={style}
          data-ad-client="ca-pub-7964049406993810"
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive.toString()}
        ></ins>
      </div>
    </div>
  );
};

export default GoogleAd;
