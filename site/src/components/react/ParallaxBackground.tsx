import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxBackground = () => {
  const { scrollY } = useScroll();

  // Create different movement speeds for different background layers
  const y1 = useTransform(scrollY, [0, 4000], [0, 800]); // slow
  const y2 = useTransform(scrollY, [0, 4000], [0, -600]); // fast inverted
  const y3 = useTransform(scrollY, [0, 4000], [0, 1500]); // medium

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', zIndex: -10, pointerEvents: 'none' }}>
      
      {/* Layer 1: Left Top Sphere */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(94, 106, 210, 0.15) 0%, rgba(10, 10, 12, 0) 70%)',
          filter: 'blur(80px)',
          y: y1
        }}
      />
      
      {/* Layer 2: Right Bottom Sphere */}
      <motion.div 
        style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(142, 152, 255, 0.1) 0%, rgba(10, 10, 12, 0) 70%)',
          filter: 'blur(80px)',
          y: y2
        }}
      />

      {/* Layer 3: Middle Sphere (New) */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80, 200, 255, 0.05) 0%, rgba(10, 10, 12, 0) 60%)',
          filter: 'blur(100px)',
          y: y3
        }}
      />
    </div>
  );
};
