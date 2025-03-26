'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

// Define our color palettes
const colorPalettes = [
  // 1. Soft Blue & Teal
  {
    name: "Soft Blue & Teal",
    primary: "#4A90E2",
    primaryDark: "#3A7BC8",
    secondary: "#56DCBA",
    dark: "#2D3748",
    light: "#F7FAFC",
    gray: "#4A5568",
    grayLight: "#E2E8F0",
    textPrimary: "#1A202C",
    textSecondary: "#2D3748",
    textLight: "#F7FAFC",
  },
  // 2. Muted Earth Tones
  {
    name: "Muted Earth Tones",
    primary: "#5D87A1",
    primaryDark: "#486A87",
    secondary: "#CBAD6D",
    dark: "#2D3A3A",
    light: "#F8F6F1",
    gray: "#3E474C",
    grayLight: "#E6E2D9",
    textPrimary: "#2D3A3A",
    textSecondary: "#3E474C",
    textLight: "#F8F6F1",
  },
  // 3. Soft Purple & Sage
  {
    name: "Soft Purple & Sage",
    primary: "#7A6DAA",
    primaryDark: "#635689",
    secondary: "#A3C4BC",
    dark: "#2F3640",
    light: "#F6F7FB",
    gray: "#4C566A",
    grayLight: "#E5E9F0",
    textPrimary: "#2F3640",
    textSecondary: "#4C566A",
    textLight: "#F6F7FB",
  },
  // 4. Soft Teal & Coral
  {
    name: "Soft Teal & Coral",
    primary: "#49A0B4",
    primaryDark: "#3C8696",
    secondary: "#F78B8B",
    dark: "#2E3440",
    light: "#F5F7FA",
    gray: "#4C566A",
    grayLight: "#E5E9F0",
    textPrimary: "#2E3440",
    textSecondary: "#3C4F65",
    textLight: "#F5F7FA",
  },
  // 5. Forest Green & Amber
  {
    name: "Forest Green & Amber",
    primary: "#2D6A4F",
    primaryDark: "#1B4332",
    secondary: "#DDA15E",
    dark: "#1B2D2A",
    light: "#F8F9FA",
    gray: "#40514E",
    grayLight: "#E9ECEF",
    textPrimary: "#1B2D2A",
    textSecondary: "#40514E",
    textLight: "#F8F9FA",
  },
  // 6. Dusty Rose & Navy
  {
    name: "Dusty Rose & Navy",
    primary: "#D57E7E",
    primaryDark: "#C26868",
    secondary: "#405A73",
    dark: "#2D3142",
    light: "#F9F7F7",
    gray: "#4A4E69",
    grayLight: "#E6E6E9",
    textPrimary: "#2D3142",
    textSecondary: "#4A4E69",
    textLight: "#F9F7F7",
  },
  // 7. Mustard & Indigo
  {
    name: "Mustard & Indigo",
    primary: "#E9B949",
    primaryDark: "#D6A73D",
    secondary: "#5D4A66",
    dark: "#282828",
    light: "#F9F7F1",
    gray: "#3C3C3C",
    grayLight: "#E8E8E8",
    textPrimary: "#282828",
    textSecondary: "#3C3C3C",
    textLight: "#F9F7F1",
  },
  // 8. Sky Blue & Terracotta
  {
    name: "Sky Blue & Terracotta",
    primary: "#87CEEB",
    primaryDark: "#5CACEE",
    secondary: "#E27D60",
    dark: "#2A2D34",
    light: "#F8FBFD",
    gray: "#474B4F",
    grayLight: "#E0E0E0",
    textPrimary: "#2A2D34",
    textSecondary: "#474B4F",
    textLight: "#F8FBFD",
  },
  // 9. Olive & Salmon
  {
    name: "Olive & Salmon",
    primary: "#6B705C",
    primaryDark: "#4F5245",
    secondary: "#E76F51",
    dark: "#2F3E46",
    light: "#F7F7F2",
    gray: "#3D405B",
    grayLight: "#E2E3DE",
    textPrimary: "#2F3E46",
    textSecondary: "#3D405B",
    textLight: "#F7F7F2",
  },
  // 10. Mint & Maroon
  {
    name: "Mint & Maroon",
    primary: "#8AC4A7",
    primaryDark: "#6DAE90",
    secondary: "#75485E",
    dark: "#2A2A2A",
    light: "#F5FBEF",
    gray: "#474747",
    grayLight: "#E9EFE7",
    textPrimary: "#2A2A2A",
    textSecondary: "#474747",
    textLight: "#F5FBEF",
  },
  // 11. Periwinkle & Peach
  {
    name: "Periwinkle & Peach",
    primary: "#7E6BC4",
    primaryDark: "#655AA2",
    secondary: "#FFCBA4",
    dark: "#313241",
    light: "#F6F7FC",
    gray: "#494C5F",
    grayLight: "#E5E6F2",
    textPrimary: "#313241",
    textSecondary: "#494C5F",
    textLight: "#F6F7FC",
  },
  // 12. Ocean & Sunset
  {
    name: "Ocean & Sunset",
    primary: "#006D77",
    primaryDark: "#00565E",
    secondary: "#E29578",
    dark: "#2B2C28",
    light: "#F5F9FA",
    gray: "#3D5A80",
    grayLight: "#EDF6F9",
    textPrimary: "#2B2C28",
    textSecondary: "#3D5A80",
    textLight: "#F5F9FA",
  },
  // 13. Lavender & Moss
  {
    name: "Lavender & Moss",
    primary: "#9D8EC7",
    primaryDark: "#8271B1",
    secondary: "#9CAF88",
    dark: "#34353A",
    light: "#F8F7FD",
    gray: "#474F4D",
    grayLight: "#E9E5F8",
    textPrimary: "#34353A",
    textSecondary: "#474F4D",
    textLight: "#F8F7FD",
  },
  // 14. Burgundy & Steel
  {
    name: "Burgundy & Steel",
    primary: "#A4133C",
    primaryDark: "#800F2F",
    secondary: "#6C757D",
    dark: "#2F2F2F",
    light: "#F8F8F8",
    gray: "#495057",
    grayLight: "#E9ECEF",
    textPrimary: "#2F2F2F",
    textSecondary: "#495057",
    textLight: "#F8F8F8",
  },
  // 15. Turquoise & Rust
  {
    name: "Turquoise & Rust",
    primary: "#2EC4B6",
    primaryDark: "#1D9E93",
    secondary: "#C84630",
    dark: "#283845",
    light: "#F7FDFC",
    gray: "#4D4D4D",
    grayLight: "#E6F6F4",
    textPrimary: "#283845",
    textSecondary: "#4D4D4D",
    textLight: "#F7FDFC",
  },
  // 16. Emerald & Gold
  {
    name: "Emerald & Gold",
    primary: "#046B5C",
    primaryDark: "#03574B",
    secondary: "#D9A566",
    dark: "#282E2D",
    light: "#F5FBF9",
    gray: "#414B4A",
    grayLight: "#E6F2EE",
    textPrimary: "#282E2D",
    textSecondary: "#414B4A",
    textLight: "#F5FBF9",
  },
  // 17. Cherry & Slate
  {
    name: "Cherry & Slate",
    primary: "#CF5C60",
    primaryDark: "#BA4A4E",
    secondary: "#607D8B",
    dark: "#262322",
    light: "#FBF6F6",
    gray: "#4D5656",
    grayLight: "#F1E4E4",
    textPrimary: "#262322",
    textSecondary: "#4D5656",
    textLight: "#FBF6F6",
  },
  // 18. Azure & Ochre
  {
    name: "Azure & Ochre",
    primary: "#307FE2",
    primaryDark: "#2460BA",
    secondary: "#CC913E",
    dark: "#20283D",
    light: "#F5F9FF",
    gray: "#3C4D6D",
    grayLight: "#E2EDFF",
    textPrimary: "#20283D",
    textSecondary: "#3C4D6D",
    textLight: "#F5F9FF",
  },
  // 19. Sage & Plum
  {
    name: "Sage & Plum",
    primary: "#87A382",
    primaryDark: "#6B8368",
    secondary: "#7C5295",
    dark: "#2F3324",
    light: "#F8F9F4",
    gray: "#4A5043",
    grayLight: "#E8EBE4",
    textPrimary: "#2F3324",
    textSecondary: "#4A5043",
    textLight: "#F8F9F4",
  },
  // 20. Clay & Marine
  {
    name: "Clay & Marine",
    primary: "#D4A373",
    primaryDark: "#B88A61",
    secondary: "#264653",
    dark: "#32292F",
    light: "#FAF6F1",
    gray: "#4A403F",
    grayLight: "#F1E9DE",
    textPrimary: "#32292F",
    textSecondary: "#4A403F",
    textLight: "#FAF6F1",
  },
  // 21. Nordic Fjord
  {
    name: "Nordic Fjord",
    primary: "#68A2B0",
    primaryDark: "#4D7F8C",
    secondary: "#D08C60",
    dark: "#252C30",
    light: "#F4F9FA",
    gray: "#4B5C60",
    grayLight: "#E8F0F2",
    textPrimary: "#252C30",
    textSecondary: "#4B5C60",
    textLight: "#F4F9FA",
  },
  // 22. Vintage Paper
  {
    name: "Vintage Paper",
    primary: "#C2A878",
    primaryDark: "#A98F5F",
    secondary: "#7D6167",
    dark: "#2C2522",
    light: "#F8F4EA",
    gray: "#574D44",
    grayLight: "#E9E5DC",
    textPrimary: "#2C2522",
    textSecondary: "#574D44",
    textLight: "#F8F4EA",
  },
  // 23. Matcha & Berry
  {
    name: "Matcha & Berry",
    primary: "#8AAB7C",
    primaryDark: "#708F62",
    secondary: "#C86B85",
    dark: "#30382E",
    light: "#F6F9F5",
    gray: "#565C54",
    grayLight: "#E8F0E6",
    textPrimary: "#30382E",
    textSecondary: "#565C54",
    textLight: "#F6F9F5",
  },
  // 24. Slate & Amber
  {
    name: "Slate & Amber",
    primary: "#465C69",
    primaryDark: "#36474F",
    secondary: "#ECAD43",
    dark: "#222A2F",
    light: "#F5F7F9",
    gray: "#595959",
    grayLight: "#E5E9ED",
    textPrimary: "#222A2F",
    textSecondary: "#595959",
    textLight: "#F5F7F9",
  },
  // 25. Midnight & Coral
  {
    name: "Midnight & Coral",
    primary: "#2B2D42",
    primaryDark: "#202231",
    secondary: "#FF5E5B",
    dark: "#151524",
    light: "#F7F7FB",
    gray: "#4A4B57",
    grayLight: "#E4E4ED",
    textPrimary: "#151524",
    textSecondary: "#4A4B57",
    textLight: "#F7F7FB",
  },
  // 26. Espresso & Cream
  {
    name: "Espresso & Cream",
    primary: "#4B3832",
    primaryDark: "#3A2A27",
    secondary: "#BE9B7B",
    dark: "#211D1B",
    light: "#F9F5F1",
    gray: "#5E5045",
    grayLight: "#EBE4DB",
    textPrimary: "#211D1B",
    textSecondary: "#5E5045",
    textLight: "#F9F5F1",
  },
  // 27. Misty Moss
  {
    name: "Misty Moss",
    primary: "#7A918D",
    primaryDark: "#5F7572",
    secondary: "#C08552",
    dark: "#323535",
    light: "#F5F7F7",
    gray: "#5D5D5D",
    grayLight: "#E6EAEA",
    textPrimary: "#323535",
    textSecondary: "#5D5D5D",
    textLight: "#F5F7F7",
  },
  // 28. Blueberry Ash
  {
    name: "Blueberry Ash",
    primary: "#5F7ADB",
    primaryDark: "#4C62B5",
    secondary: "#A5CAD2",
    dark: "#2D2E40",
    light: "#F6F8FD",
    gray: "#4D4F66",
    grayLight: "#E7EDFB",
    textPrimary: "#2D2E40",
    textSecondary: "#4D4F66",
    textLight: "#F6F8FD",
  },
  // 29. Desert Sunset
  {
    name: "Desert Sunset",
    primary: "#F2994A",
    primaryDark: "#E07F2E",
    secondary: "#6C5B7B",
    dark: "#352F21",
    light: "#FDF8F2",
    gray: "#5F5242",
    grayLight: "#F3E9DD",
    textPrimary: "#352F21",
    textSecondary: "#5F5242",
    textLight: "#FDF8F2",
  },
  // 30. Deep Sea
  {
    name: "Deep Sea",
    primary: "#0F4C75",
    primaryDark: "#093A5A",
    secondary: "#3CAEA3",
    dark: "#1A1C20",
    light: "#F4F7FA",
    gray: "#475569",
    grayLight: "#E2ECF3",
    textPrimary: "#1A1C20",
    textSecondary: "#475569",
    textLight: "#F4F7FA",
  },
];

// Define interfaces for our data types
interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  contact: ContactInfo;
  location: string;
}

interface AboutMe {
  summary: string;
  offerings: string[];
}

interface WorkExperience {
  title: string;
  company: string;
  dates: string;
  description: string[];
}

interface WorkExperienceSummary {
  company: string;
  role: string;
  period: string;
  summary: string;
}

interface SideProject {
  name: string;
  description: string;
}

interface Education {
  degree: string;
  dates: string;
  institution: string;
  major: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
}

interface SkillsData {
  mobile: string[];
  frontend: string[];
  backend: string[];
  languages: string[];
  devops: string[];
  other: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [currentPalette, setCurrentPalette] = useState<number>(0);
  
  // Function to apply a palette
  const applyPalette = (index: number) => {
    const palette = colorPalettes[index];
    
    // Apply the palette to CSS variables
    document.documentElement.style.setProperty('--primary', palette.primary);
    document.documentElement.style.setProperty('--primary-dark', palette.primaryDark);
    document.documentElement.style.setProperty('--secondary', palette.secondary);
    document.documentElement.style.setProperty('--dark', palette.dark);
    document.documentElement.style.setProperty('--light', palette.light);
    document.documentElement.style.setProperty('--gray', palette.gray);
    document.documentElement.style.setProperty('--gray-light', palette.grayLight);
    
    // Apply text colors
    document.documentElement.style.setProperty('--text-primary', palette.textPrimary);
    document.documentElement.style.setProperty('--text-secondary', palette.textSecondary);
    document.documentElement.style.setProperty('--text-light', palette.textLight);
    
    // Also update background radial gradient colors
    document.documentElement.style.setProperty('--primary-gradient', `rgba(${hexToRgb(palette.primary)}, 0.1)`);
    document.documentElement.style.setProperty('--secondary-gradient', `rgba(${hexToRgb(palette.secondary)}, 0.1)`);
    
    // Force document-wide color update
    document.documentElement.style.setProperty('color', palette.textPrimary);
    document.body.style.color = palette.textPrimary;
    
    // Update header text colors
    const headerTextElements = document.querySelectorAll('.header h1, .header h2, .header p, .header a, .header span');
    headerTextElements.forEach(el => {
      (el as HTMLElement).style.color = palette.dark;
    });
    
    setCurrentPalette(index);
  };
  
  // Function to change to a random palette
  const changeRandomPalette = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * colorPalettes.length);
    } while (newIndex === currentPalette);
    
    applyPalette(newIndex);
  };
  
  // Apply a random color palette on page load
  useEffect(() => {
    // Select a random palette
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    applyPalette(randomIndex);
    
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Track scroll position for parallax effects
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Effect to apply palette change and update text colors
  useEffect(() => {
    if (currentPalette >= 0) {
      const palette = colorPalettes[currentPalette];
      
      // Force a document color update for primary content
      document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li, div, a').forEach(el => {
        const element = el as HTMLElement;
        
        // Check context to apply appropriate text color
        if (element.closest('footer')) {
          element.style.color = palette.light;
        } 
        else if (element.closest('.header')) {
          element.style.color = palette.dark;
        }
        else if (element.closest('.activeTab') || 
                (element.closest('.tabButton') && element.closest('.tabButton')?.classList.contains('activeTab'))) {
          element.style.color = palette.textLight;
        }
        else if (element.closest('.sectionTitle')) {
          element.style.color = palette.textLight;
        }
        else {
          element.style.color = palette.textPrimary;
        }
      });
      
      // Fix for specific elements
      document.querySelectorAll('.name, .title, .location').forEach(el => {
        (el as HTMLElement).style.color = palette.dark;
      });
    }
  }, [currentPalette]);
  
  // Effect to apply palette change and update header text colors
  useEffect(() => {
    // For fixing header colors
    const fixHeaderColors = () => {
      const headerElements = document.querySelectorAll('.header *, .name, .title, .location');
      headerElements.forEach(el => {
        (el as HTMLElement).style.color = colorPalettes[currentPalette].dark;
      });
    };
    
    if (currentPalette >= 0) {
      // Execute immediately
      fixHeaderColors();
      
      // And also set an interval to ensure it keeps being applied (in case of React repaints)
      const intervalId = setInterval(fixHeaderColors, 100);
      
      // Clean up
      return () => clearInterval(intervalId);
    }
  }, [currentPalette]);
  
  // Helper function to convert hex to rgb
  function hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '0, 0, 0';
  }
  
  // Personal information data
  const personalInfo: PersonalInfo = {
    name: "RAJIV SINGH",
    title: "Software Architect & Full-Stack Engineer",
    contact: {
      phone: "+971509618952",
      email: "rajivsingh0891@gmail.com",
      linkedin: "linkedin.com/in/r4jiv",
      github: "github.com/r4jiv007"
    },
    location: "Dubai"
  };

  // About me data
  const aboutMe: AboutMe = {
    summary: "Versatile and innovation-driven Software Architect with 10+ years of experience across the entire technology stack. While specializing in mobile application development, I bring expertise in full-stack solutions spanning front-end, back-end, and DevOps across diverse sectors including telecom, finance, e-commerce, and cybersecurity.",
    offerings: [
      "Cross-platform and native mobile app development (iOS, Android, React Native, Flutter)",
      "Full-stack development with React, Next.js, Spring Boot, and cloud technologies",
      "SDK development and system architecture design for complex applications",
      "Back-end systems in Java, Kotlin, and Node.js with robust API design",
      "Application architecture consulting and technical leadership",
      "Performance optimization and legacy system modernization",
      "CI/CD pipeline implementation and DevOps solutions",
      "Security-focused development practices and implementation"
    ]
  };

  // Work experience data
  const workExperienceSummary = [
    {
      company: "Visa Inc.",
      role: "Senior Software Engineer",
      period: "Dec 2022 - Present",
      summary: "Leading development of Visa Push Provisioning SDK for native mobile platforms and cross-platform frameworks. Specializing in secure mobile payment solutions and SDK architecture."
    },
    {
      company: "Digital14",
      role: "Senior Software Engineer",
      period: "Feb 2022 - Sept 2022",
      summary: "Worked on Katim Messenger, an end-to-end encrypted secure messaging client. Developed Log Upload SDK and focused on refactoring legacy code."
    },
    {
      company: "StartAppz",
      role: "Senior Software Engineer",
      period: "Feb 2018 - Jan 2022",
      summary: "Developed and led architecture for multiple high-traffic telecom self-care apps, sports apps, and fintech solutions. Notable projects include du App (5M+ downloads, 200K+ DAU), Lebara KSA (1M+ downloads), and PayFazt payment app."
    },
    {
      company: "Huawei Technologies",
      role: "Senior Software Engineer",
      period: "Nov 2016 - Jan 2018 & Oct 2014 - April 2016",
      summary: "Maintained and developed OTT and IPTV apps with features like VOD, live streaming, and video casting. Created analytics SDK for user activity reporting. Key projects: ElifeOn for Etisalat, Zong Cinema, and TapSong music app."
    },
    {
      company: "BeWo Technologies",
      role: "Senior Software Engineer",
      period: "May 2016 - Sept 2016",
      summary: "Led a team of 4 developers building Android-based Point of Sale systems. Optimized performance by reducing inventory catalogue download time from 40 to 9 minutes."
    },
    {
      company: "Mobiotics IT Solutions",
      role: "Software Engineer",
      period: "July 2013 - Sept 2014",
      summary: "Started as an intern and progressed to full-time engineer. Developed OTT apps for set-top boxes, including custom AppStore and Launcher applications."
    }
  ]; 
  // Side projects data
  const sideProjects: SideProject[] = [
    {
      name: "Vedantu SuperCoders",
      description: "This app is to book the demo sessions for super-coder training for kids"
    },
    {
      name: "7awish(hawish)",
      description: "7awish is the first mobile application loyalty program in Jordan. Worked on Rest-API integration, Custom Animations, Google Maps, push notification, third-party lib integration like- Volley, Picasso, QrReader"
    },
    {
      name: "Orderly",
      description: "Orderly is a supply chain management app. Was responsible for developing order scheduling/rescheduling module."
    },
    {
      name: "Mimba",
      description: "Worked on Android app and DevOps on AWS"
    },
    {
      name: "desertadventures.com",
      description: "Worked on migration of WordPress-based website from shared hosting to DigitalOcean. Configuring Droplets, nginx configuration."
    }
  ];

  // Education data
  const education: Education = {
    degree: "B.Eng",
    dates: "2009-2013",
    institution: "Chhatrapati Shivaji Institute of Technology",
    major: "Computer Science (cpi 8/10)"
  };

  // Certifications data
  const certifications: Certification[] = [
    {
      name: "Certificate of Completion of VA/PT",
      issuer: "Vulnerability Assessment/Penetration Testing",
      date: "2023"
    },
    {
      name: "Web Fundamentals Learning Path",
      issuer: "TryHackMe",
      date: "2023"
    },
    {
      name: "Pre Security Learning Path",
      issuer: "TryHackMe",
      date: "2023"
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2022"
    },
    {
      name: "Google Professional Android Developer",
      issuer: "Google",
      date: "2021"
    }
  ];

  // Skills data
  const skills: SkillsData = {
    mobile: [
      "Native iOS (Swift, Objective-C)",
      "Native Android (Kotlin, Java)",
      "Cross-platform (Flutter, React Native, Xamarin, Cordova)",
      "Mobile SDK development and integration",
      "UI/UX implementation and optimization"
    ],
    frontend: [
      "React.js, Next.js",
      "JavaScript, TypeScript",
      "HTML5, CSS3, SASS",
      "Responsive design principles",
      "State management libraries (Redux, Context API)"
    ],
    backend: [
      "Java, Kotlin with Spring Boot",
      "Node.js, Express",
      "REST API design and implementation",
      "Database design and optimization",
      "Microservices architecture"
    ],
    languages: [
      "Java - 10+ years experience",
      "Kotlin - 5+ years experience",
      "Swift - 4+ years experience",
      "JavaScript/TypeScript - 4+ years experience",
      "Dart (Flutter) - 3+ years experience"
    ],
    devops: [
      "CI/CD: Jenkins, Bitrise, GitHub Actions, Fastlane",
      "Cloud: AWS, Digital Ocean, Firebase",
      "Container Technologies: Docker, Kubernetes",
      "Infrastructure as Code",
      "Shell scripting and automation"
    ],
    other: [
      "Cybersecurity integration and secure development",
      "Technical leadership and team management",
      "Agile methodologies and project planning",
      "System architecture design",
      "Performance optimization techniques"
    ]
  };

  // Summarized work experience data
 

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}>
          <span className={styles.loaderText}>Loading</span>
          <span className={styles.loaderDots}>...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container} style={{ 
      backgroundPosition: `0 ${scrollPosition * 0.05}px` 
    }}>
      <Head>
        <title>{personalInfo.name} - Portfolio</title>
        <meta name="description" content={`${personalInfo.name} - ${personalInfo.title}`} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        {/* Header section with animation */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headingWrapper}>
              <h1 className={styles.name}>{personalInfo.name}</h1>
              <h2 className={styles.title}>{personalInfo.title}</h2>
              <p className={styles.location}>{personalInfo.location}</p>
            </div>
            
            <div className={styles.contactInfo}>
              <a href={`mailto:${personalInfo.contact.email}`} className={styles.contactItem}>
                <span className={styles.icon}>✉️</span> {personalInfo.contact.email}
              </a>
              <a href={`tel:${personalInfo.contact.phone}`} className={styles.contactItem}>
                <span className={styles.icon}>📱</span> {personalInfo.contact.phone}
              </a>
              <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <span className={styles.icon}>🔗</span> LinkedIn
              </a>
              <a href={`https://${personalInfo.contact.github}`} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <span className={styles.icon}>💻</span> GitHub
              </a>
            </div>
          </div>
        </header>

        {/* Navigation Tabs with animated underline */}
        <div className={styles.tabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'about' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'experience' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'projects' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'skills' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'education' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <Link href="/blog" className={styles.tabButton}>
            Blog
          </Link>
        </div>

        {/* Content Section with animations */}
        <section className={styles.content}>
          {/* About Me */}
          {activeTab === 'about' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <div className={styles.aboutCard}>
                <p className={styles.aboutSummary}>{aboutMe.summary}</p>
                <div className={styles.servicesWrapper}>
                  <h3 className={styles.servicesTitle}>What I Can Offer</h3>
                  <div className={styles.servicesGrid}>
                    {aboutMe.offerings.map((offering, index) => (
                      <div 
                        key={index} 
                        className={styles.serviceItem}
                        style={{
                          animationDelay: `${index * 0.1}s`
                        } as React.CSSProperties}
                      >
                        <div className={styles.serviceIcon}>✓</div>
                        <p className={styles.serviceText}>{offering}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Work Experience - Summarized */}
          {activeTab === 'experience' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Work Experience</h2>
              <div className={styles.timeline}>
                {workExperienceSummary.map((job, index) => (
                  <div key={index} className={styles.jobItem}>
                    <div className={styles.jobHeader}>
                      <h3 className={styles.jobTitle}>{job.role}</h3>
                      <div className={styles.companyDate}>
                        <span className={styles.company}>{job.company}</span>
                        <span className={styles.dates}>{job.period}</span>
                      </div>
                    </div>
                    <p className={styles.jobSummary}>{job.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Side Projects with hover effects */}
          {activeTab === 'projects' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Side Projects</h2>
              <div className={styles.projectsGrid}>
                {sideProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className={styles.projectCard}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    } as React.CSSProperties}
                  >
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills with improved layout */}
          {activeTab === 'skills' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Technical Skills</h2>
              <div className={styles.skillsGrid}>
                {Object.entries(skills).map(([category, items], index) => (
                  <div 
                    key={category} 
                    className={styles.skillCategory}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    } as React.CSSProperties}
                  >
                    <h3 className={styles.skillCategoryName}>{category.toUpperCase()}</h3>
                    <ul className={styles.skillList}>
                      {items.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education with card layout */}
          {activeTab === 'education' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Education</h2>
              <div className={styles.educationCard}>
                <div className={styles.educationHeader}>
                  <h3 className={styles.degree}>{education.degree} in {education.major}</h3>
                  <span className={styles.eduDates}>{education.dates}</span>
                </div>
                <p className={styles.institution}>{education.institution}</p>
              </div>
              
              <h2 className={styles.sectionTitle} style={{marginTop: "2rem"}}>Certifications</h2>
              <div className={styles.certificationsGrid}>
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className={styles.certificationCard}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    } as React.CSSProperties}
                  >
                    <h3 className={styles.certificationName}>{cert.name}</h3>
                    <div className={styles.certificationDetails}>
                      <span className={styles.certificationIssuer}>{cert.issuer}</span>
                      <span className={styles.certificationDate}>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.paletteInfo}>
          <span>Current Theme: {colorPalettes[currentPalette].name}</span>
          <button 
            onClick={changeRandomPalette}
            className={styles.paletteButton}
          >
            Try Another Theme
          </button>
        </div>
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
} 