import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import type { Experience } from '../../data/cv';

export const ScrollTimeline = ({ experiences }: { experiences: Experience[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the center line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
      {/* Background Timeline Line */}
      <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--border-color)', transform: 'translateX(-50%)', zIndex: 0 }} className="timeline-line-bg"></div>
      
      {/* Animated Timeline Line */}
      <motion.div 
        style={{ 
          position: 'absolute', 
          left: '50%', 
          top: 0, 
          bottom: 0, 
          width: '4px', 
          background: 'linear-gradient(to bottom, var(--accent-light), var(--accent))', 
          transform: 'translateX(-50%)', 
          transformOrigin: 'top',
          scaleY,
          zIndex: 1,
          boxShadow: '0 0 10px rgba(94, 106, 210, 0.5)'
        }} 
      />

      <div ref={containerRef} style={{ position: 'relative', zIndex: 2 }}>
        {experiences.map((exp, index) => (
          <div key={exp.id} style={{ position: 'relative' }}>
            {/* Glowing Dot on the Timeline */}
            <motion.div 
              style={{
                position: 'absolute',
                left: '50%',
                top: '40px', /* Matches the connection line */
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--bg-dark)',
                border: '2px solid var(--accent)',
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
                boxShadow: '0 0 10px var(--accent)'
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ type: 'spring', bounce: 0.5 }}
            />
            <ExperienceCard experience={exp} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
