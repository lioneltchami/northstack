'use client';

import { useEffect } from 'react';

export default function SafariOptimizations() {
  useEffect(() => {
    // Only run on client-side to avoid hydration mismatch
    if (typeof window === 'undefined') return;
    
    // Check if Safari browser
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (!isSafari) return;

    // Safari-specific performance optimizations
    const style = document.createElement('style');
    style.id = 'safari-optimizations';
    style.textContent = `
      @media screen and (-webkit-min-device-pixel-ratio:0) {
        /* Safari-specific optimizations */
        * {
          animation-duration: 0.2s !important;
          transition-duration: 0.2s !important;
        }
        
        [data-framer-motion] {
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        .animated-gradient {
          transform: translateZ(0);
          will-change: background-position;
          backface-visibility: hidden;
        }
        
        .backdrop-blur-sm,
        .backdrop-blur-md {
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
          will-change: backdrop-filter;
        }
      }
    `;
    
    // Only add if not already added
    if (!document.getElementById('safari-optimizations')) {
      document.head.appendChild(style);
    }
    
    // Cleanup on unmount
    return () => {
      const existingStyle = document.getElementById('safari-optimizations');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return null; // This component only adds styles, no visual output
}