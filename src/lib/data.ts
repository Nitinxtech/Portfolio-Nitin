import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { LeetcodeIcon } from '@/components/shared/icons';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiDocker,
  SiGit,
  SiWebpack,
} from 'react-icons/si';

export const personalData = {
  name: 'Nitin Pandey',
  title: 'Full-stack Developer',
  summary:
    'I am Nitin Pandey, a motivated and enthusiastic final year BTech CSE student with a strong foundation in fullstack web development and a passion for coding and problem-solving. I am proficient in Object-Oriented Programming (OOPS) and have experience building projects using frontend and backend technologies. Additionally, I am skilled in Data Structures and Algorithms (DSA) with Java and continuously work to enhance my problem-solving abilities.',
  contact: {
    email: 'nitinpandey.dev@gmail.com',
    resume: 'https://drive.google.com/file/d/1ZKapZ_YilSGdQqKI1rxRjHAJq_YaTR-0/view?usp=sharing',
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/Nitinxtech',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nitinpandey306',
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
    "I am Nitin Pandey, a motivated and enthusiastic final year BTech CSE student with a strong foundation in fullstack web development and a passion for coding and problem-solving. I am proficient in Object-Oriented Programming (OOPS) and have experience building projects using frontend and backend technologies. Additionally, I am skilled in Data Structures and Algorithms (DSA) with Java and continuously work to enhance my problem-solving abilities.",
};

export const skillsData = {
  title: 'Skills',
  categories: [
    {
      name: 'Frontend',
      skills: [
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'REST APIs', icon: null, color: null },
      ],
    },
    {
      name: 'Databases & Cloud',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      ],
    },
    {
      name: 'Tools & Principles',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Agile Methodologies', icon: null, color: null },
        { name: 'CI/CD', icon: null, color: null },
        { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
      ],
    },
  ],
};

export const projectsData = {
  title: 'Featured Projects',
  projects: [
    {
      id: 1,
      title: 'Collabscipt (Collaborative code editor)',
      description: 'Designed an online code Editor for Real time collaboration. It allows multiple users to write, edit and run code simultaneously in various programming languages. Used React js and tailwind css for the Frontend and Node js for Backend and Web Socket for the connection. Implemented authentication and authorization. Used REST APIs knowledge in the project. Implemented Different themes and fonts for personal Customization.',
      techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'WebSocket', 'REST APIs'],
      imageUrl: '/project-1.png',
      imagePlaceholderId: '1',
      liveUrl: '#',
      githubUrl: 'https://github.com/Nitinxtech/CollabScript',
    },
    {
      id: 2,
      title: 'TripMate-Hotel Booking Website',
      description: 'Created a full stack website from which users can directly book hotels for themselves at home. Used Express as server, Node js for Backend, MongoDB as database and Frontend was implemented with the help of ejs templates. Implemented authentication and authorization in website. Used REST APIs knowledge in the project. Implemented map feature in the website which shows the location of the hotel listed on website.',
      techStack: ['Express', 'Node.js', 'MongoDB', 'EJS', 'REST APIs'],
      imageUrl: '/project-2.png',
      imagePlaceholderId: '2',
      liveUrl: '#',
      githubUrl: 'https://github.com/Nitinxtech',
    },
    {
      id: 3,
      title: 'AskMate - Chatbot',
      description: 'Developed AskMate, a next-gen AI conversational application using basic HTML, CSS, and JavaScript. Integrated Gemini API for delivering intelligent and context-aware responses. Enabled dynamic image addition to enhance interactivity and visual engagement. Designed a clean and user-friendly interface to ensure seamless interactions, showcasing API integration and frontend development skills.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
      imageUrl: '/project-3.png',
      imagePlaceholderId: '3',
      liveUrl: '#',
      githubUrl: 'https://github.com/Nitinxtech',
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
