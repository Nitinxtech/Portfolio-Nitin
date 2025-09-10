import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { LeetcodeIcon } from '@/components/shared/icons';

export const personalData = {
  name: 'Nitin Pandey',
  title: 'Software Engineer',
  summary:
    'A passionate and results-driven Software Engineer with expertise in building modern, responsive, and scalable web applications. Proficient in the full development lifecycle, from concept to deployment. Always eager to learn new technologies and solve complex problems.',
  contact: {
    email: 'pandey30nitin@email.com',
    resume: '/nitin-pandey-resume.pdf',
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/nitin-pandey-30',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nitin-pandey-30',
      icon: Linkedin,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/pandey30nitin/',
      icon: LeetcodeIcon,
    },
  ],
};

export const aboutData = {
  title: 'About Me',
  description:
    "Hello! I'm Nitin, a software engineer with a deep-seated passion for creating elegant, efficient, and user-friendly digital experiences. My journey in technology started with a fascination for how things work, which quickly blossomed into a career in web development. I thrive on turning complex problems into simple, beautiful, and intuitive solutions. I'm proficient in both front-end and back-end development, allowing me to build comprehensive and robust applications from the ground up. When I'm not coding, you can find me exploring new hiking trails, diving into a good book, or contributing to open-source projects.",
};

export const skillsData = {
  title: 'Skills',
  categories: [
    {
      name: 'Frontend',
      skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'REST APIs'],
    },
    {
      name: 'Databases & Cloud',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Vercel', 'Docker'],
    },
    {
      name: 'Tools & Principles',
      skills: ['Git', 'Agile Methodologies', 'CI/CD', 'Jest', 'Webpack'],
    },
  ],
};

export const projectsData = {
  title: 'Featured Projects',
  projects: [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce website with product listings, a shopping cart, user authentication, and a secure checkout process.',
      techStack: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Stripe'],
      imageUrl: '/project-1.png',
      imagePlaceholderId: '1',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application that helps teams organize, assign, and track their work with an intuitive Kanban board interface.',
      techStack: ['React', 'Firebase', 'ShadCN UI', 'React-beautiful-dnd'],
      imageUrl: '/project-2.png',
      imagePlaceholderId: '2',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'My personal portfolio website (the one you are currently on!) to showcase my skills and projects, built with modern web technologies.',
      techStack: ['Next.js', 'GenAI', 'Tailwind CSS', 'TypeScript'],
      imageUrl: '/project-3.png',
      imagePlaceholderId: '3',
      liveUrl: '#',
      githubUrl: '#',
    },
  ],
};

export const contactData = {
  title: 'Get In Touch',
  description: "I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll get back to you as soon as possible!",
  actions: [
    {
      label: 'Email Me',
      href: `mailto:${personalData.contact.email}`,
      icon: Mail,
    },
    {
      label: 'Download Resume',
      href: personalData.contact.resume,
      icon: FileText,
      download: true,
    },
  ],
};
