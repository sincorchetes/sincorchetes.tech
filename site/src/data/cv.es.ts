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
    location: 'Canarias, España · Remote',
    description: [
      'Infraestructura como Código (IaC) & Cloud: Erradicación del "ClicOps" mediante la implementación extensa de Terraform en procesos antes manuales, habilitando infraestructuras predecibles, auditables y escalables.',
      'Ecosistema GitOps & Automatización Cero-Fricción: Implementación de la filosofía GitOps gestionando el ciclo de vida completo y la orquestación de entornos. Automatización de despliegues y políticas de apagado de infraestructuras para austeridad de recursos, reduciendo radicalmente los tiempos de SLA.',
      'Plataforma Kubernetes On-Premise (CNCF): Aprovisionamiento y administración de clústeres de Kubernetes On-Site, operando todo el abanico cloud-native moderno (Service Mesh con Istio, CD con ArgoCD, inyección segura con External Secrets, y observabilidad con Prometheus/Grafana).',
      'ChatOps & Gestión de Crisis: Integración de notificaciones de monitorización directamente en canales de Microsoft Teams, orquestando una respuesta instantánea y colaborativa ante incidencias y flujos críticos.',
      'Evangelización DevOps y Prevención de Silos: Destrucción de feudos y silos de información a través del desarrollo persistente de la documentación técnica completa. Mentoría de compañeros impartiendo formaciones, charlas y seminarios técnicos orientados al empoderamiento del equipo de ingeniería.'
    ],
    skills: ['Linux', 'Kubernetes', 'GCP', 'IaC', 'Python', 'ArgoCD', 'Azure DevOps', 'NATS', 'Docker', 'AWS', 'Jira']
  },
  {
    id: 'python-backend-cloud',
    company: 'Retail óptico y salud visual',
    role: 'Python Backend & Cloud Engineer',
    duration: 'Oct 2022 - Jan 2024',
    location: 'Remote',
    description: [
      'Automatización Serverless (Azure Functions): Diseño e implementación de software interno para la gestión masiva y concurrente de miles de descuentos para empleados. Se eliminó un flujo heredado de hojas de cálculo e interacciones con imprentas físicas, erradicando costes manuales y fallos humanos operando como una caja negra para otros sistemas.',
      'Generación dinámica de Códigos de Artículos: Desarrollo de un sistema paralelo automatizado de generación de códigos de barras, operables y consumibles de forma directa e inmediata por las tiendas de la franquicia.',
      'Modernización Cloud-Native (Refactoring & Contenerización): Rescate de infraestructura obsoleta actualizando código legado hacia versiones de PHP soportadas/estables, y contenerizando la aplicación web para ser gobernada vía Cloud en Azure, reduciendo brutalmente el footprint de mantenimiento.',
      'Culturas DevOps y CI/CD: Incorporación de pipelines automatizados en el 100% de los procesos cruzados, consolidando entregas continuas, reduciendo significativamente los tiempos de despliegue y mitigando el error humano.'
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
      'FinOps & Optimización de Costes (>90% ahorro): Desmantelamiento de >60 VMs obsoletas (Linode/DigitalOcean) y múltiples instancias PaaS de sobrecoste (Heroku) (antes ~2.200€/mes). Refactorización hacia un clúster Kubernetes Vanilla en Bare Metal consolidado en 9 Nodos (~300/mes). Se lograron ahorrar más de 24.000€ anuales y reducir los impactos en producción (Zero-Downtime Deployments).',
      'Monitorización y Alerting Integral (Slack): Implementación de un stack de métricas de consumo de las aplicaciones que permitió mapear la deuda de los sistemas, acelerar diagnósticos (Mejor SLA) y guiar el proceso seguro de contenerización.',
      'Platform Engineering (Ansible): Automatización total del provisionamiento de nueva infraestructura, clústeres Kubernetes (control-planes/dataplane), sincronización de BBDD y despliegues automatizados de monolitos heredados (API / SP).',
      'Disaster Recovery Eficiente: Implementación de backups inmutables y diarios comprimidos eficientemente con BorgBackup, reduciendo el almacenamiento de snapshots de BBDD de 80GB a 2GB.',
      'Transición a CI/CD: Despliegue de la infraestructura de GitLab Runners, pasando de despliegues manuales caóticos en producción a flujos de trabajo validados (Dev/Prod), mitigando drásticamente el volumen de incidencias humanas.'
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
      'Elaboración de documentación profunda sobre servicios productivos a mi cargo, consigiendo una mitigación más eficiente y reducción de tiempos en guardia (On-call).',
      'Actualizaciones sin afectación: Modificación y actualización de sistemas físicos en el core de e-commerce estratégico evadiendo restauraciones completas y reduciendo el downtime en un 90%.',
      'Mejora en Observabilidad: Implementación de sensores para alertar de procedimientos críticos de la infraestructura, mejorando los tiempos de respuesta de SLA.',
      'Automatización con Ansible: Desarrollo de Playbooks orientados a erradicar la carga manual del departamento de operaciones.',
      'Optimización Server-side: Creación de plantillas optimizadas de Máquinas Virtuales acelerando directamente el tiempo de entrega y provisión a los equipos de desarrollo.',
      'Seguridad (Hardening): Diseño y ejecución de plantes de parcheo calendarizados e incrementales en la flota de servidores.'
    ],
    skills: ['Linux', 'RHEL', 'OpenShift', 'Ansible', 'Apache Web Server', 'Apache Tomcat', 'Docker', 'Nagios', 'Databases', 'DR']
  },
  {
    id: 'mulesol',
    company: 'Mulesol SL',
    role: 'Network Operations Technician | Airport Critical Infrastructure',
    duration: 'Aug 2017 - Oct 2018',
    location: 'Palma de Mallorca, España · On-site',
    description: [
      'Resolución de incidencias complejas en turnos de verano estresando el enrutamiento entre centros. Scripting avanzado gestionando y orquestando de manera eficiente la configuración de switches Alcatel OS.',
      'Impacto visible en las instalaciones: Implementación, cableado y configuración integral de >50 pasarelas con reconocimiento facial (ABC), reduciendo radicalmente las colas de afluencia policial en PMI.',
      'Atención a cuentas estratégicas: Gestión del equipamiento plataformado de cliente final corporativo (Iberia, AENA, AVIS) brindando SLAs rigurosos con respuesta y resolución en menos de 1 día.'
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
      'Infraestructura como Código (IaC): Diseño y mantenimiento de la infraestructura comunitaria utilizando Nix y Flakes, garantizando entornos de desarrollo 100% reproducibles mediante Devenv.',
      'Automatización (CI/CD): Implementación de pipelines en GitHub Actions para el despliegue automatizado de la web (Docusaurus) y validación de contribuciones.',
      'Gestión de Comunidad & Open Source: Coordinación de flujos de trabajo basados en Pull Requests y gestión de la organización en GitHub, fomentando la participación de la comunidad hispanohablante.',
      'Arquitectura de Contenidos: Migración y configuración de Docusaurus como generador de sitios estáticos, optimizando el SEO y la integración de canales RSS/Atom.'
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
      'Colaboración técnica en la redacción y mantenimiento de la documentación oficial de Rocky Linux (Enterprise Linux downstream), asegurando la calidad técnica para administradores de sistemas a nivel global.'
    ],
    isCommunity: true
  },
  {
    id: 'python-espana',
    company: 'Python España',
    role: 'Infrastructure Manager & DevOps (Volunteer)',
    duration: 'Aug 2022 - Apr 2026',
    location: 'Remote',
    description: [
      'Responsable del mantenimiento y evolución de la infraestructura de la asociación. Administración de servidores, automatización de tareas y soporte técnico a la comunidad de Python más grande de España.'
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
      'Liderazgo y organización de eventos técnicos para la difusión del Software Libre y el ecosistema Fedora Linux. Evangelización tecnológica, gestión de comunidad y realización de talleres sobre administración de sistemas.'
    ],
    isCommunity: true
  }
];

export const education = [
  {
    id: 'uoc',
    institution: 'Universitat Oberta de Catalunya',
    title: 'Grado universitario, Ingeniería informática',
    date: 'Apr 2026 – Present',
    description: 'Consolidando años de experiencia en la "trinchera" del Cloud y DevOps con una base académica sólida. Investigación en sistemas distribuidos y preparación para la docencia técnica.'
  },
  {
    id: 'itti',
    institution: 'ITTI High Institute',
    title: 'Advanced Python Programming Specialization',
    date: 'Feb 2023 – Oct 2023',
    description: 'Programación Orientada a Objetos, Decoradores, Concurrencia (AsyncIO). Desarrollo de APIs modernas con FastAPI. Clean Code y Testing (Pytest).'
  },
  {
    id: 'zonzamas',
    institution: 'IES Zonzamas',
    title: 'CFGS Administración de Sistemas Informáticos en Red',
    date: '2013 – 2015',
    description: 'Administración avanzada de sistemas Linux/Unix. Gestión de red (DNS, DHCP). Enrutamiento (Cisco CCNA).'
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
    description: 'Portfolio y CV de Álvaro Castillo, Senior DevOps Engineer especializado en Kubernetes, Arquitectura Cloud-Native y Automatización.'
  },
  hero: {
    role: 'Senior DevOps &',
    gradientRole: 'Cloud Engineer',
    description: 'Arquitecto de infraestructuras escalables, automatización de despliegues y soluciones nativas de la nube.',
    viewExperience: 'Ver Experiencia',
    myBlog: 'Mi Blog',
    nixosCommunity: 'NixOS Hispano'
  },
  sections: {
    experience: {
      title: 'Trayectoria',
      gradientTitle: 'Profesional',
      subtitle: 'Soluciones críticas y sistemas resilientes'
    },
    openSource: {
      title: 'Open Source &',
      gradientTitle: 'Comunidades',
      subtitle: 'Construyendo ecosistemas y compartiendo conocimiento'
    },
    certifications: {
      title: 'Certificaciones',
      issued: 'Expedición:'
    },
    education: {
      title: 'Estudios'
    },
    about: {
      title: 'Más',
      gradientTitle: 'Sobre Mí',
      mindset: 'Core Mindset',
      books: 'Libros que me inspiran',
      personal: 'Off-Keyboard'
    }
  },
  skills: {
    resilient: 'Perfil Analítico y Resiliente frente a incidentes.',
    curious: 'Curiosidad innata por evolucionar y optimizar.',
    communication: 'Comunicación asertiva en discusiones de alto nivel.',
    teamPlayer: 'Team Player: Trabajo colaborativo y estrecho con desarrolladores (Dev & Ops real).',
    mentoring: 'Me encanta explicar y formar a mis compañeros.'
  },
  books: {
    cleanCodeDesc: 'Robert C. Martin • Arquitectura e Ingeniería',
    emotionalIntelligenceDesc: 'Daniel Goleman • Gestión del Estrés',
    meditationsDesc: 'Marco Aurelio • Liderazgo Estoico'
  },
  personal: {
    p1: 'Más allá de los clústeres y el código, disfruto explorando nuevas rutas en moto, encontrando en la carretera la desconexión perfecta.',
    p2: 'Además de mi pasión por el motor, me fascina aprender sobre nutrición y aplicar principios de biohacking para optimizar mi salud y mi rendimiento en el día a día.'
  },
  footer: {
    rights: 'All rights reserved.',
    ai: 'Sitio materializado con Inteligencia Artificial. Los ingenieros de infraestructura sabemos cuándo delegar el Frontend.'
  }
};
