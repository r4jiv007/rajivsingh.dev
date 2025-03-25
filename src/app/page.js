'use client';

// File: pages/index.js
import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
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
  
  // Personal information data
  const personalInfo = {
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
  const aboutMe = {
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
  const workExperience = [
    {
      title: "Senior Software Engineer",
      company: "Visa Inc.",
      dates: "Dec 2022 - Current",
      description: [
        "Actively contribute to the development of the Visa Push Provisioning SDK for native mobile platforms, ensuring seamless integration and functionality.",
        "Write SDK wrappers for cross-platform mobile frameworks, enabling efficient utilization of the Visa Push Provisioning SDK across multiple platforms.",
        "Collaborate with cross-functional teams to gather requirements and ensure the SDK meets the needs of various stakeholders.",
        "Conduct thorough testing and debugging to ensure the reliability and performance of the SDK.",
        "Provide technical support and troubleshooting for the SDK, assisting clients and internal teams in resolving issues."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Digital14",
      dates: "Feb 2022 - Sept 2022",
      description: [
        "Worked on an end to end encrypted secure messaging client, Katim Messenger.",
        "Developed Log Upload SDK to send crash and general logs to the backend.",
        "Refactoring the legacy code, adding new features and bug fixes."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "StartAppz",
      dates: "Feb 2018 - Jan 2022",
      description: [
        "Developing different kinds of applications which include telecom self-care apps, sports apps, kids apps, and fintech p2p payment apps.",
        "Architecting and designing the application flow, suggesting API req/resp structure.",
        "Also involved in iOS app development from time to time.",
        "Leading the team of Automation Testers and responsible for code architecture and review we use selenium with testing.",
        "Setting up CI/CD for linting, testing, and distribution of mobile apps.",
        "Telco Selfcare apps provide features like paying bills, recharge, sim-purchase, number-portability, checking consumption history, and much more",
        "MySalam (Android) / (iOS)",
        "Lebara KSA (Android) / (iOS): 1 Million+ download, around 20K DAU, and 99.9% crash-free sessions.",
        "du App (Android) / (iOS):  5 Million+ download, more than 200K DAU, and 99.7% crash-free sessions. Rating went up from 3.9 to 4.4 after revamp.",
        "Virgin Mobile KSA: 500K+ downloads.",
        "Other Apps:",
        "3Abqarino is a quiz app for kids where they can select any subject and play the quiz. Developed in Flutter as a side-project and finished in the record 20 hours with 100% code sharing for iOS and Android.",
        "Haddaf, a Football news app for the MENA region.",
        "PayFazt p2p payment app via bank APIs, in the initial development phase.",
        "Kotlin, JAVA, Clean Architecture, MVVM, MVP, Dagger, RxKotlin, Payment Gateway Integration Fastlane, Shell-Script, Bitrise."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Huawei Technologies, Dubai",
      dates: "Nov 2016 - Jan 2018",
      description: [
        "Responsible for maintaining and adding features to legacy OTT, IPTV apps, which includes features like VOD, LIVE, TSTV, Catchup, Video Casting using Websockets and Dial protocol to Smart TVs. Integrating 3rd party libraries for video and service quality monitoring.",
        "Developed Analytics SDK \"NGAM\" to report user activity.",
        "OTT Apps:",
        "ElifeOn for Etisalat",
        "Zong Cinema",
        "Worked on music streaming app TapSong with live audio streaming, playlist management, and publishing feature."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "BeWo Technologies, Bangalore",
      dates: "May 2016 - Sept 2016",
      description: [
        "I was leading the team of 4 android developers.",
        "Developed solution for Android-Based Point of Sale system, BeWo Genie.",
        "Hardware interfacing like Barcode scanner and keyboards to POS devices",
        "Reduced Inventory catalogue download time from 40 minutes to 9 minutes by shifting download module from single thread to multi-thread model."
      ]
    },
    {
      title: "Software Engineer",
      company: "Huawei Technologies, Dubai",
      dates: "Oct 2014 - April 2016",
      description: [
        "Responsible for maintaining and adding features to legacy OTT, IPTV apps.",
        "Also, we were white-labeling the apps for different clients in the MENA region.",
        "ElifeOn (phone/tablet)",
        "MuchTV"
      ]
    },
    {
      title: "Software Engineer",
      company: "Mobiotics IT solutions pvt Ltd, Bangalore",
      dates: "July 2013 - Sept 2014",
      description: [
        "Began as an Android Developer Intern, transitioned to full-time.",
        "Developed OTT apps for set-top boxes, including video casting, screen sharing, and control via Android devices using DIAL and UPNP protocols.",
        "Also created an AppStore and Launcher for OTT boxes.",
        "Apps developed:",
        "TvBuddy",
        "MyTVApp"
      ]
    }
  ];

  // // Side projects data
  // const sideProjects = [
  //   {
  //     name: "Vedantu SuperCoders",
  //     description: "This app is to book the demo sessions for super-coder training for kids"
  //   },
  //   {
  //     name: "7awish(hawish)",
  //     description: "7awish is the first mobile application loyalty program in Jordan. Worked on Rest-API integration, Custom Animations, Google Maps, push notification, third-party lib integration like- Volley, Picasso, QrReader"
  //   },
  //   {
  //     name: "Orderly",
  //     description: "Orderly is a supply chain management app. Was responsible for developing order scheduling/rescheduling module."
  //   },
  //   {
  //     name: "Mimba",
  //     description: "Worked on Android app and DevOps on AWS"
  //   },
  //   {
  //     name: "desertadventures.com",
  //     description: "Worked on migration of WordPress-based website from shared hosting to DigitalOcean. Configuring Droplets, nginx configuration."
  //   }
  // ];

  // Education data
  const education = {
    degree: "B.Eng",
    dates: "2009-2013",
    institution: "Chhatrapati Shivaji Institute of Technology",
    major: "Computer Science (cpi 8/10)"
  };

  // Certifications data
  const certifications = [
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
  const skills = {
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
  const workExperienceSummary = [
    {
      company: "Visa Inc.",
      role: "Software Architect",
      period: "Dec 2022 - Present",
      summary: "Leading architecture and development of Visa Push Provisioning SDK for multiple platforms, implementing secure payment solutions across native and cross-platform frameworks. Designing scalable API architectures and integration systems."
    },
    {
      company: "Digital14",
      role: "Full-Stack Engineer",
      period: "Feb 2022 - Sept 2022",
      summary: "Architected and developed components for Katim Messenger, an end-to-end encrypted secure messaging platform. Created secure logging system with backend integration and improved system reliability through modern architecture patterns."
    },
    {
      company: "StartAppz",
      role: "Lead Software Engineer",
      period: "Feb 2018 - Jan 2022",
      summary: "Spearheaded architecture for high-traffic applications combining mobile, backend, and frontend technologies. Notable achievements include scaling du App to 5M+ downloads with 200K+ DAU, implementing REST APIs with Java Spring Boot, and designing ReactJS dashboards for analytics."
    },
    {
      company: "Huawei Technologies",
      role: "Full-Stack Developer",
      period: "Nov 2016 - Jan 2018 & Oct 2014 - April 2016",
      summary: "Developed end-to-end solutions for OTT and IPTV platforms, including client applications, backend services, and analytics systems. Implemented RESTful APIs, streaming services, and cross-platform client applications."
    },
    {
      company: "BeWo Technologies",
      role: "Technical Lead",
      period: "May 2016 - Sept 2016",
      summary: "Led a cross-functional team building Android-based Point of Sale systems with Java backend services. Redesigned system architecture to achieve 75% improvement in data synchronization performance."
    },
    {
      company: "Mobiotics IT Solutions",
      role: "Software Engineer",
      period: "July 2013 - Sept 2014",
      summary: "Developed full-stack solutions for OTT platforms including client applications, middleware APIs, and content management systems. Implemented custom UI frameworks and backend integration systems."
    }
  ];

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
          {/* <button 
            className={`${styles.tabButton} ${activeTab === 'projects' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button> */}
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
                        }}
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
          {/* {activeTab === 'projects' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Side Projects</h2>
              <div className={styles.projectsGrid}>
                {sideProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className={styles.projectCard}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )} */}

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
                    }}
                  >
                    <h3 className={styles.skillCategoryName}>{category.toUpperCase()}</h3>
                    <ul className={styles.skillList}>
                      {items.map((item, i) => (
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
                    }}
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
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}