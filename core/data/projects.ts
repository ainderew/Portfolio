export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image: string;
  video?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'Workdash',
    description: 'A revolutionary 2D spatial messaging platform for teams. Bridge the gap between physical and digital offices with real-time video and audio in a gamified environment.',
    tags: ['Next.js', 'Socket.io', 'Tailwind'],
    github: 'https://github.com/ainderew/Workdash',
    live: 'https://workdash.site',
    image: '/assets/workdash_preview.gif',
    color: '#DE682C'
  },
  {
    id: '02',
    title: 'Bramk',
    description: 'An AI-powered customer support ecosystem for MSMEs. Streamlining business operations with intelligent automation and real-time analytics.',
    tags: ['Electron', 'SQLite', 'React', 'Node'],
    github: 'https://github.com/ainderew/POSandInventoryManagement',
    live: 'https://bramk.tech',
    image: '/assets/pos_pic.png',
    video: '/low.mp4',
    color: '#DE682C'
  },
  {
    id: '03',
    title: 'Techpal',
    description: 'A high-performance e-commerce engine for computer retail. Featuring a custom CRM, lightning-fast inventory management, and seamless payment gateway integrations.',
    tags: ['Next.js', 'TypeScript', 'Node.js'],
    github: 'https://github.com/ainderew/',
    live: 'https://www.Techpal.store',
    image: '/assets/techpal.webp',
    color: '#DE682C'
  }
];
