import React from 'react';
import { motion } from 'framer-motion';

export const LanguageSwitcher = ({ currentLang }: { currentLang: 'es' | 'en' }) => {
  const isEn = currentLang === 'en';
  
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 50,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <a 
        href={isEn ? '/' : '/en'} 
        style={{ textDecoration: 'none' }}
      >
        <motion.button
          className="glass-panel hover-3d lang-btn"
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 600,
            fontSize: '14px',
            border: '1px solid var(--accent)',
            boxShadow: '0 4px 15px rgba(94, 106, 210, 0.2)',
            color: 'var(--text-primary)',
          }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(94, 106, 210, 0.1)' }}
          whileTap={{ scale: 0.95 }}
        >
          {isEn ? (
            <>
              <span style={{ fontSize: '18px' }}>🇪🇸</span> 
              <span className="lang-text" style={{ color: 'var(--text-secondary)' }}>Ver en Español</span>
            </>
          ) : (
            <>
              <span style={{ fontSize: '18px' }}>🇺🇸</span> 
              <span className="lang-text" style={{ color: 'var(--text-secondary)' }}>View in English</span>
            </>
          )}
        </motion.button>
      </a>
    </motion.div>
  );
};
