export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  skills?: string[];
  isCommunity?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'knowmad-mood',
    company: 'knowmad mood',
    role: 'Senior DevOps Engineer',
    duration: 'Jan 2024 - Present',
    location: 'Canary Islands, Spain · Remote',
    description: [
      'Infrastructure as Code (IaC) & Cloud: Eradicated "ClickOps" by implementing extensive Terraform architectures across legacy manual processes, enabling predictable, auditable, and highly scalable infrastructures.',
      'GitOps Ecosystem & Zero-Friction Automation: Implemented GitOps philosophy managing the entire lifecycle and environment orchestration. Automated deployments and infrastructure shutdown policies to maximize resource efficiency, radically improving SLA fulfillment times.',
      'On-Premise Kubernetes Platform (CNCF): Provisioned and managed On-Site Kubernetes clusters, operating a modern cloud-native stack (Istio Service Mesh, ArgoCD for CD, External Secrets for dynamic injection, and Prometheus/Grafana for observability).',
      'ChatOps & Crisis Management: Integrated robust monitoring alerts directly into Microsoft Teams channels, orchestrating instant and collaborative responses to incidents and critical workflows.',
      'DevOps Evangelism & Silo Prevention: Dismantled information silos through persistent development of comprehensive technical documentation. Mentored engineering teams by conducting internal training sessions, technical talks, and workshops targeting team empowerment.'
    ],
    skills: ['Linux', 'Kubernetes', 'GCP', 'IaC', 'Python', 'ArgoCD', 'Azure DevOps', 'NATS', 'Docker', 'AWS', 'Jira']
  },
  {
    id: 'python-backend-cloud',
    company: 'Optical & Healthcare Retail',
    role: 'Python Backend & Cloud Engineer',
    duration: 'Oct 2022 - Jan 2024',
    location: 'Remote',
    description: [
      'Serverless Automation (Azure Functions): Designed and implemented internal software for the concurrent, high-volume management of thousands of employee discount pipelines. Dismantled legacy spreadsheet dependencies and physical printing workflows, eradicating manual costs and human error through a robust black-box architecture.',
      'Dynamic Barcode Generation Engine: Developed an automated parallel system for real-time barcode generation, immediately actionable and consumable by franchise retail stores.',
      'Cloud-Native Modernization (Refactoring & Containerization): Rescued obsolete infrastructure by upgrading legacy code to stable PHP versions, containerizing the web application to be fully governed via Azure Cloud, drastically reducing the maintenance footprint.',
      'DevOps Culture & CI/CD: Engineered automated CI/CD pipelines across 100% of the cross-functional processes, enforcing continuous delivery practices that significantly reduced deployment times and mitigated human error.'
    ],
    skills: ['Python', 'Azure Container Apps', 'Azure Functions', 'Microservices', 'Serverless', 'CI/CD', 'Azure DevOps']
  },
  {
    id: 'theysay-me',
    company: 'Theysay.me',
    role: 'Lead Infrastructure & DevOps Engineer',
    duration: 'Nov 2020 - Sep 2022',
    location: 'Remote',
    description: [
      'FinOps & Cost Optimization (>90% savings): Decommissioned over 60 obsolete VMs (Linode/DigitalOcean) and multiple overpriced PaaS instances (Heroku) previously costing ~€2,200/mo. Architected a migration to a Vanilla Kubernetes cluster on Bare Metal hardware consolidated into 9 Nodes (~300€/mo), achieving over €24,000 in annual savings while securing Zero-Downtime Deployments.',
      'Comprehensive Observability & Alerting (Slack): Deployed a full-stack application metrics suite that allowed mapping system technical debt, accelerating diagnostics (improved SLA requirements), and guiding a secure containerization process.',
      'Platform Engineering (Ansible): Fully automated the provisioning of new infrastructure, Kubernetes clusters (control nodes/data planes), database synchronization, and legacy monolith deployments (API/SP).',
      'Efficient Disaster Recovery: Implemented immutable, daily backups efficiently compressed using BorgBackup, drastically reducing database snapshot storage from 80GB down to 2GB.',
      'CI/CD Transition: Deployed the required GitLab Runners infrastructure, transitioning from chaotic manual deployments in production to validated branching workflows (Dev/Prod), drastically decreasing the volume of human-induced incidents.'
    ],
    skills: ['Kubernetes', 'Bare Metal', 'FinOps', 'Hetzner', 'Ansible', 'Jenkins', 'GitLab', 'Rocky Linux', 'Zabbix', 'PostgreSQL']
  },
  {
    id: 'riu-hotels',
    company: 'RIU Hotels & Resorts',
    role: 'Datacenter Systems Engineer | Critical Infrastructure',
    duration: 'Oct 2018 - Jan 2021',
    location: 'Palma de Mallorca · On-site',
    description: [
      'Authored deep technical documentation regarding productive services under my perimeter, achieving more efficient incident mitigation and reducing On-call resolution times.',
      'Zero-Impact Upgrades: Executed physical system modifications and upgrades within the strategic e-commerce core, evading full system restorations and cutting downtime by 90%.',
      'Observability Enhancement: Implemented granular sensors to alert on critical infrastructure processes proactively, vastly improving SLA response times.',
      'Ansible Automation: Engineered declarative Playbooks geared towards eradicating the manual operational workload of the SysAdmin department.',
      'Server-side Optimization: Created optimized Virtual Machine templates directly accelerating the delivery and provisioning time to Software Development teams.',
      'Security (Hardening): Designed and executed scheduled and incremental patching roadmaps across the entire bare-metal server fleet.'
    ],
    skills: ['Linux', 'RHEL', 'OpenShift', 'Ansible', 'Apache Web Server', 'Apache Tomcat', 'Docker', 'Nagios', 'Databases', 'DR']
  },
  {
    id: 'mulesol',
    company: 'Mulesol SL',
    role: 'Network Operations Technician | Airport Critical Infrastructure',
    duration: 'Aug 2017 - Oct 2018',
    location: 'Palma de Mallorca, Spain · On-site',
    description: [
      'Resolved highly complex networking incidents during peak summer shifts, heavily stressing routing environments between hubs. Wrote advanced scripts efficiently managing and orchestrating Alcatel OS switch configurations.',
      'High-Impact Physical Implementations: Executed the comprehensive cabling, configuration, and deployment of over 50 automated border control (ABC) facial recognition gates, radically reducing police congestion queues at the PMI airport.',
      'Strategic Account Management: Managed and maintained corporate end-client platform hardware (Iberia, AENA, AVIS), delivering strict SLAs with response and resolution times under 24 hours.'
    ],
    skills: ['Networking', 'Datacenter', 'Cisco', 'Alcatel']
  }
];

export const openSource: Experience[] = [
  {
    id: 'nixos-hispano',
    company: 'NixOS Hispano',
    role: 'Founder & Platform Engineer',
    duration: 'Apr 2026 - Present',
    location: 'Remote',
    description: [
      'Infrastructure as Code (IaC): Designed and maintained the community infrastructure using Nix and Flakes, ensuring 100% reproducible development environments via Devenv.',
      'Automation (CI/CD): Implemented GitHub Actions pipelines for automated static site deployments (Docusaurus) and strict pull request validations.',
      'Community & Open Source Management: Coordinated workflows based on Pull Requests and governed the GitHub organization, fostering the participation of the Hispanic open-source community.',
      'Content Architecture: Migrated and configured Docusaurus as a static site generator, heavily optimizing SEO routing and RSS/Atom channel integrations.'
    ],
    isCommunity: true
  },
  {
    id: 'rocky-linux',
    company: 'Rocky Linux',
    role: 'Technical Contributor & Documentation',
    duration: 'Jan 2022 - Present',
    location: 'Remote',
    description: [
      'Technical collaboration drafting and maintaining the official Rocky Linux (Enterprise Linux downstream) documentation, ensuring high-quality technical standards for systems administrators globally.'
    ],
    isCommunity: true
  },
  {
    id: 'python-espana',
    company: 'Python Spain',
    role: 'Infrastructure Manager & DevOps (Volunteer)',
    duration: 'Aug 2022 - Apr 2026',
    location: 'Remote',
    description: [
      'Led the maintenance and evolution of the non-profit association infrastructure. Administered bare-metal servers, automated administrative tasks, and provided technical support to the largest Python community in Spain.'
    ],
    isCommunity: true
  },
  {
    id: 'fedora-project',
    company: 'Fedora Project',
    role: 'Fedora Ambassador',
    duration: 'Oct 2010 - Mar 2022',
    location: 'Remote',
    description: [
      'Led and organized technical events to spread Free and Open Source Software (FOSS) and the Fedora Linux ecosystem. Directed technical evangelism, community management, and hosted workshops on systems administration.'
    ],
    isCommunity: true
  }
];

export const education = [
  {
    id: 'uoc',
    institution: 'Universitat Oberta de Catalunya (UOC)',
    title: 'Bachelor\'s Degree in Computer Engineering',
    date: 'Apr 2026 – Present',
    description: 'Consolidating years of hands-on experience in the Cloud/DevOps "trenches" with a solid academic foundation. Researching distributed systems and preparing for technical instruction roles.'
  },
  {
    id: 'itti',
    institution: 'ITTI High Institute',
    title: 'Advanced Python Programming Specialization',
    date: 'Feb 2023 – Oct 2023',
    description: 'Object-Oriented Programming, Decorators, Concurrency (AsyncIO). Modern API development using FastAPI. Clean Code architecture and automated testing (Pytest).'
  },
  {
    id: 'zonzamas',
    institution: 'IES Zonzamas',
    title: 'Vocational Degree in Network Systems Administration',
    date: '2013 – 2015',
    description: 'Advanced Linux/Unix systems administration. Network management protocols (DNS, DHCP). Routing methodologies (Cisco CCNA).'
  }
];

export const certifications = [
  {
    id: 'pcep',
    title: 'PCEP™ – Certified Entry-Level Python Programmer',
    issuer: 'OpenEDG Python Institute',
    date: 'Dec 2023'
  },
  {
    id: 'lfcs',
    title: 'Linux Foundation Certified System Administrator (LFCS)',
    issuer: 'The Linux Foundation',
    date: 'Jun 2022'
  },
  {
    id: 'devops-sre',
    title: 'DevOps and SRE Fundamentals: Implementing Continuous Delivery LFS261',
    issuer: 'The Linux Foundation',
    date: 'May 2022'
  },
  {
    id: 'linux-networking',
    title: 'Linux Networking and Administration LFS211',
    issuer: 'The Linux Foundation',
    date: 'May 2022'
  },
  {
    id: 'cka',
    title: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    date: 'Feb 2022'
  },
  {
    id: 'k8s-security',
    title: 'Kubernetes Security Essentials LFS260',
    issuer: 'The Linux Foundation',
    date: 'Nov 2021'
  }
];

export const ui = {
  seo: {
    title: 'Álvaro Castillo | Senior DevOps Engineer & Cloud',
    description: 'Portfolio and CV of Álvaro Castillo, Senior DevOps Engineer specializing in Kubernetes, Cloud-Native architecture, and Automations.'
  },
  hero: {
    role: 'Senior DevOps &',
    gradientRole: 'Cloud Engineer',
    description: 'Architecting highly scalable infrastructure, deployment automation, and cloud-native solutions.',
    viewExperience: 'View Experience',
    myBlog: 'My Blog',
    nixosCommunity: 'NixOS Hispano'
  },
  sections: {
    experience: {
      title: 'Professional',
      gradientTitle: 'Experience',
      subtitle: 'Critical solutions and resilient systems'
    },
    openSource: {
      title: 'Open Source &',
      gradientTitle: 'Communities',
      subtitle: 'Building ecosystems and sharing knowledge'
    },
    certifications: {
      title: 'Certifications',
      issued: 'Issued:'
    },
    education: {
      title: 'Education'
    },
    about: {
      title: 'More',
      gradientTitle: 'About Me',
      mindset: 'Core Mindset',
      books: 'Books that inspire me',
      personal: 'Off-Keyboard'
    }
  },
  skills: {
    resilient: 'Analytical and resilient profile during incidents.',
    curious: 'Innate curiosity to evolve and optimize systems.',
    communication: 'Assertive communication tailored to high-level discussions.',
    teamPlayer: 'Team Player: Close collaboration with developers (True Dev & Ops).',
    mentoring: 'I love explaining and mentoring my colleagues.'
  },
  books: {
    cleanCodeDesc: 'Robert C. Martin • Architecture and Engineering',
    emotionalIntelligenceDesc: 'Daniel Goleman • Stress Management',
    meditationsDesc: 'Marcus Aurelius • Stoic Leadership'
  },
  personal: {
    p1: 'Beyond coding and clusters, I enjoy exploring new routes on my motorcycle, finding the perfect disconnection on the open road.',
    p2: 'Alongside my passion for riding, I love learning about nutrition and applying biohacking principles to optimize my health and daily performance.'
  },
  footer: {
    rights: 'All rights reserved.',
    ai: 'Site materialized using Artificial Intelligence. Infrastructure engineers know exactly when to delegate the Frontend.'
  }
};
