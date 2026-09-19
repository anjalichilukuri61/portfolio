const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Project = require('./models/Project');
const Experience = require('./models/Experience');
const Skill = require('./models/Skill');
const Certification = require('./models/Certification');
const User = require('./models/User');

dotenv.config({ path: '../.env' });
connectDB();

const projects = [
  {
    title: "Local Opportunity Intelligence System",
    category: ["Full Stack", "MERN"],
    shortDesc: "Map-based web application for real-time local opportunities.",
    problem: "Finding relevant local opportunities such as jobs, events, and community activities often requires checking multiple websites.",
    solution: "This system centralizes discovery through RSS feeds and an interactive map while providing targeted email alerts.",
    techStack: ["React", "Vite", "Tailwind CSS", "React-Leaflet", "Node.js", "Express.js", "MongoDB", "node-cron"],
    features: ["Interactive Map", "RSS Feeds Integration", "JWT Authentication", "Email Alerts"],
    github: "https://github.com/anjalichilukuri61/local-opportunity-intelligence",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Voice Resume Builder",
    category: ["Full Stack", "AI/ML"],
    shortDesc: "AI-powered web application to build and optimize resumes by speaking.",
    problem: "Reduces the tedious process of manually typing and formatting resumes.",
    solution: "Uses speech-to-text and LLMs to extract, structure, and optimize career information into an ATS-friendly PDF.",
    techStack: ["React", "Tailwind CSS", "Java Spring Boot", "MongoDB", "Groq Whisper API", "Groq LLaMA API"],
    features: ["Speech-to-text input", "AI-powered formatting", "ATS-friendly PDF export", "Multi-Agent Architecture"],
    github: "https://github.com/anjalichilukuri61/voice-resume-builder",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Handloom Connect",
    category: ["Full Stack"],
    shortDesc: "E-commerce platform connecting handloom artisans with customers.",
    problem: "Traditional artisans lack modern platforms to showcase their products to a wider audience.",
    solution: "A modern e-commerce platform that allows artisans to sell directly and supports custom product requests.",
    techStack: ["React", "React Router DOM", "CSS3"],
    features: ["Product Showcase", "Custom Requests", "Direct Artisan Connection"],
    github: "https://github.com/anjalichilukuri61/Handloom-connect",
    image: "https://images.unsplash.com/photo-1605007559196-1c7477c7bfa3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Machine Maintenance Tracker",
    category: ["Full Stack", "Backend"],
    shortDesc: "Centralized system for managing machine maintenance records.",
    problem: "Relying on spreadsheets and paper-based records is inefficient and error-prone.",
    solution: "A digital system to centrally add, monitor, update, and track machines.",
    techStack: ["React.js", "Python", "FastAPI", "SQLite", "SQLAlchemy"],
    features: ["Digital Record Keeping", "Maintenance Monitoring", "Status Updates"],
    github: "https://github.com/anjalichilukuri61/machine-maintenance-tracker",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Student Management System",
    category: ["Backend", "MERN"],
    shortDesc: "Web application for comprehensive student record management.",
    problem: "Schools need a simple, centralized way to manage student data.",
    solution: "A lightweight application supporting full CRUD operations on student records.",
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "HTML", "CSS"],
    features: ["Add/View/Update/Delete Students", "Server-side rendering"],
    github: "https://github.com/anjalichilukuri61/student-management-system",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  }
];

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Rojgaar",
    period: "May 2026 – August 2026",
    responsibilities: [
      "Worked on frontend and backend development.",
      "Developed responsive web pages using React.js.",
      "Created and integrated APIs using Node.js and Express.js.",
      "Worked with MongoDB for database management.",
      "Fixed bugs and improved application performance.",
      "Used Git and GitHub for version control."
    ]
  },
  {
    role: "Full Stack Developer Intern (MERN)",
    company: "SmartBridge Educational Services Pvt. Ltd.",
    period: "May 2025 – July 2025",
    description: "Completed a MERN Full Stack internship at SmartBridge (APSCHE), where I worked with MongoDB, Express.js, React.js, and Node.js and gained practical experience in full-stack web development."
  },
  {
    role: "Artificial Intelligence & Data Analytics Intern",
    company: "Edunet Foundation",
    period: "January 2025 – February 2025",
    description: "Completed a virtual internship in Artificial Intelligence and Data Analytics with a Green Skills focus.",
    responsibilities: [
      "Explored AI and data analytics applications.",
      "Worked on data-driven problem solving.",
      "Learned how technology can contribute to environmental sustainability and responsible innovation."
    ]
  },
  {
    role: "Marketing Intern",
    company: "Shaastra, IIT Madras",
    period: "October 2024 – January 2025",
    description: "Worked as a Marketing Intern at Shaastra, IIT Madras, promoting events and handling outreach activities.",
    responsibilities: [
      "Communication",
      "Teamwork",
      "Professional interaction",
      "Participant coordination"
    ]
  }
];

const certifications = [
  {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    date: "December 2025"
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy & OpenEDG Python Institute",
    date: "November 3, 2024"
  },
  {
    title: "Problem Solving Through Programming in C",
    issuer: "NPTEL (SWAYAM) – IIT Kharagpur",
    date: "2024 (Jan - Apr)"
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL (SWAYAM) – IIT Madras",
    date: "2025 (Jul - Oct)"
  }
];

const users = [
  {
    name: "Anjali Chilukuri",
    email: "admin@example.com",
    password: "password123" // This will be hashed by the User model's pre-save middleware
  }
];

const importData = async () => {
  try {
    await Project.deleteMany();
    await Experience.deleteMany();
    await Certification.deleteMany();
    await User.deleteMany();

    await Project.insertMany(projects);
    await Experience.insertMany(experiences);
    await Certification.insertMany(certifications);
    
    // We use create instead of insertMany so the pre-save middleware runs to hash the password
    for (const user of users) {
      await User.create(user);
    }

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
