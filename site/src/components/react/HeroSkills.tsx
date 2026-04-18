import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiLinux, 
  SiNixos, 
  SiGooglecloud, 
  SiTerraform, 
  SiAnsible, 
  SiKubernetes, 
  SiDocker 
} from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

const techStack = [
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'NixOS', icon: SiNixos, color: '#5277C3' },
  { name: 'KVM', icon: FaServer, color: '#ff6600' }, // Custom fallback since KVM has no exact simple-icon
  { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
  { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300 } }
};

export const HeroSkills = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}
    >
      {techStack.map((tech) => (
        <motion.div 
          key={tech.name}
          variants={itemVariants}
          whileHover={{ scale: 1.25, y: -5 }}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '8px',
            color: 'var(--text-secondary)',
            cursor: 'default'
          }}
          onMouseOver={(e) => { e.currentTarget.style.color = tech.color; e.currentTarget.style.filter = `drop-shadow(0 0 10px ${tech.color}40)` }}
          onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.filter = 'none' }}
        >
          <tech.icon size={36} />
          <span style={{ fontSize: '12px', fontWeight: 600 }}>{tech.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
