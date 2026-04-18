import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, Cloud } from 'lucide-react';
import { SiLinux, SiNixos, SiGooglecloud, SiTerraform, SiAnsible, SiKubernetes, SiDocker, SiPython, SiJenkins, SiCisco, SiGitlab, SiJira, SiPostgresql, SiNatsdotio, SiArgo } from 'react-icons/si';
import { FaServer, FaNetworkWired, FaAws, FaDatabase, FaChartLine, FaCubes, FaInfinity } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import type { Experience } from '../../data/cv';

const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('linux') || s.includes('rhel') || s.includes('rocky') || s.includes('ubuntu')) return <SiLinux style={{ marginRight: '6px' }} />;
  if (s.includes('kubernetes') || s.includes('k8s')) return <SiKubernetes style={{ marginRight: '6px' }} />;
  if (s.includes('gcp') || s.includes('google cloud')) return <SiGooglecloud style={{ marginRight: '6px' }} />;
  if (s.includes('azure')) return <VscAzure style={{ marginRight: '6px' }} />;
  if (s.includes('aws')) return <FaAws style={{ marginRight: '6px' }} />;
  if (s.includes('python')) return <SiPython style={{ marginRight: '6px' }} />;
  if (s.includes('ansible')) return <SiAnsible style={{ marginRight: '6px' }} />;
  if (s.includes('jenkins')) return <SiJenkins style={{ marginRight: '6px' }} />;
  if (s.includes('gitlab')) return <SiGitlab style={{ marginRight: '6px' }} />;
  if (s.includes('argocd') || s.includes('argo')) return <SiArgo style={{ marginRight: '6px' }} />;
  if (s.includes('ci/cd') || s.includes('cicd')) return <FaInfinity style={{ marginRight: '6px' }} />;
  if (s.includes('microservices')) return <FaCubes style={{ marginRight: '6px' }} />;
  if (s.includes('cisco')) return <SiCisco style={{ marginRight: '6px' }} />;
  if (s.includes('terraform') || s.includes('iac')) return <SiTerraform style={{ marginRight: '6px' }} />;
  if (s.includes('docker') || s.includes('container')) return <SiDocker style={{ marginRight: '6px' }} />;
  if (s.includes('jira')) return <SiJira style={{ marginRight: '6px' }} />;
  if (s.includes('postgres')) return <SiPostgresql style={{ marginRight: '6px' }} />;
  if (s.includes('nats')) return <SiNatsdotio style={{ marginRight: '6px' }} />;
  if (s.includes('database')) return <FaDatabase style={{ marginRight: '6px' }} />;
  if (s.includes('server') || s.includes('bare metal') || s.includes('datacenter') || s.includes('apache') || s.includes('hetzner')) return <FaServer style={{ marginRight: '6px' }} />;
  if (s.includes('zabbix') || s.includes('nagios')) return <FaChartLine style={{ marginRight: '6px' }} />;
  if (s.includes('network') || s.includes('dr') || s.includes('finops') || s.includes('alcatel')) return <FaNetworkWired style={{ marginRight: '6px' }} />;
  return null;
};

export const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track this specific card's progress in the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.3", "0.5 1"] // Start earlier, end later for a wider animation window
  });

  // 3D & Parallax transformations - Much stronger!
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const filter = useTransform(scrollYProgress, [0, 1], ['blur(10px)', 'blur(0px)']);

  // Stagger variants for the inner content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} style={{ perspective: 1200, marginBottom: '80px', width: '100%', display: 'flex', justifyContent: isLeft ? 'flex-start' : 'flex-end', position: 'relative' }}>
      
      {/* Decorative Connection Line to Timeline (Glows!) */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '40px',
          left: isLeft ? 'auto' : '-40px',
          right: isLeft ? '-40px' : 'auto',
          width: 'calc(50% + 40px)',
          height: '2px',
          background: 'linear-gradient(90deg, rgba(94, 106, 210,0) 0%, var(--accent) 50%, rgba(94, 106, 210,0) 100%)',
          zIndex: -1,
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.3]),
          scaleX: useTransform(scrollYProgress, [0, 0.7], [0, 1]),
          transformOrigin: isLeft ? 'right' : 'left'
        }}
      />

      <motion.div
        style={{
          scale,
          opacity,
          rotateX,
          rotateY: isLeft ? useTransform(scrollYProgress, [0, 1], [-15, 0]) : useTransform(scrollYProgress, [0, 1], [15, 0]),
          y,
          filter,
          transformOrigin: isLeft ? 'left center' : 'right center', 
          width: '100%',
          maxWidth: '600px',
          boxShadow: useTransform(scrollYProgress, [0, 1], ['0 0 0px rgba(94,106,210,0)', '0 10px 40px rgba(94,106,210,0.1)']),
          border: '1px solid',
          borderColor: useTransform(scrollYProgress, [0, 1], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.15)']),
        }}
        className="glass-panel hover-3d"
      >
        <motion.div 
          style={{ padding: '40px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: 'rgba(94, 106, 210, 0.2)', padding: '16px', borderRadius: '14px', color: 'var(--accent)', boxShadow: '0 0 15px rgba(94, 106, 210, 0.3)' }}>
              {experience.isCommunity ? <Cloud size={28} /> : <Briefcase size={28} />}
            </div>
            <div>
              <h3 style={{ fontSize: '26px', margin: 0, color: 'var(--text-primary)', fontWeight: 700 }}>{experience.role}</h3>
              <h4 style={{ fontSize: '18px', margin: 0, color: 'var(--accent-light)', fontWeight: 500, marginTop: '4px' }}>{experience.company}</h4>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '24px', marginBottom: '30px', flexWrap: 'wrap' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '15px' }}>
               <Calendar size={18} />
               <span>{experience.duration}</span>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '15px' }}>
               <MapPin size={18} />
               <span>{experience.location}</span>
             </div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
            {experience.description.map((desc, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--accent)', borderRadius: '50%', padding: '2px', marginTop: '6px', boxShadow: '0 0 8px var(--accent)' }}>
                  <CheckCircle2 size={14} style={{ color: '#fff', flexShrink: 0 }} />
                </div>
                <p style={{ margin: 0, color: '#d1d5db', fontSize: '16px', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </motion.div>

          {experience.skills && experience.skills.length > 0 && (
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '24px' }}>
              {experience.skills.map((skill, i) => (
                <span key={i} style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  padding: '6px 14px', 
                  borderRadius: '20px',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  backdropFilter: 'blur(4px)',
                  transition: 'background 0.3s, color 0.3s',
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff' }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                >
                  {getSkillIcon(skill)}
                  {skill}
                </span>
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
