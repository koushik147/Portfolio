import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username: "Koushik",
  title: "Hi all, I'm Koushik",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with TypeScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://www.github.com/koushik147",
  linkedin: "https://www.linkedin.com/in/koushik-ar/",
  gmail: "koushikanitharaja@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Stevens Institue of Technology",
      logo: require("./assets/images/Stevens_Institute_of_Technology_Logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2021 - May 2023",
      desc: "Graduated with a GPA of 3.7/4.0. Focused on Software Engineering, Data Structures, and Algorithms. Completed projects in Machine Learning and Web Development."
    },
    {
      schoolName: "Karpagam College of Engineering",
      logo: require("./assets/images/Karpagam_Logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - May 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems."
    }
  ]
};

// Top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false 
};

// Work experience section

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "AI Software Engineer",
      company: "Turing",
      companylogo: require("./assets/images/Turing_logo.png"),
      date: "April 2024 – Present",
      descBullets: [
        "Accelerated the development of a monitoring and evaluation software tool for the Data Analytics model, enabling real-time tracking of critical metrics such as loss, accuracy, training time, and resource usage, aligning with ERP practices",
        "Refactored server-side rendering (SSR) with Next.js, leading to a 40% increase in SEO performance and faster page loads"
      ]
    },
    {
      role: "Software Engineer I",
      company: "Green Action Studio",
      companylogo: require("./assets/images/GreenActionStudio_logo.png"),
      date: "July 2023 – Feb 2024",
      descBullets: [
        "Pioneered implementation of driver-centric pricing features in the partner portal, developed an intuitive discounts dashboard, collaborated with technical support to streamline admin portal for efficient access to driver data and discounts",
        "Deployed scalable serverless AWS CDK cloud applications for charging station maintenance, ensuring high system reliability"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Verzeo Technologies",
      companylogo: require("./assets/images/Verzeo_logo.png"),
      date: "Nov 2020 – Dec 2020",
      descBullets: [
        "Developed portfolio websites using React.js and Context API while collaborating with the backend software engineers, simultaneously addressed and rectified core business-critical bugs, ensured sustained integrity of the website",
        "Actively participated in Agile processes, including Scrum, planning, and contributing to effective project management"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "IIT Hyderabad",
      companylogo: require("./assets/images/IITHyderabad_logo.png"),
      date: "Aug 2020 – Sep 2020",
      descBullets: [
        "Designed utility applications involving kernel-level functionalities for managing internal organizational resources for other engineers and supplemented internal tooling using Java, achieving a 30% increase in workflow efficiency",
        "Architected a mobile-first responsive design system using CSS Grid and Flexbox, resulting in a 25% increase in mobile conversion rates and a 40% increase in mobile user engagement while improving cross-device compatibility"
      ]
    }
  ]
};

// Academic Section

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Big Projects Section

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my most notable projects",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Fable: A social story-telling platform ",
      projectDesc: "Constructed a social story-telling platform, which is a multi-browser compatible, React.js-powered web application like Wattpad using Node.js, Express.js for the backend, NextJS, and MongoDB as the NoSQL database",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        
      ]
    }
  ],
  display: false 
};

// Achievement and certificates Section

const achievementSection = {
  title: emoji("Volunteering and Certifications 🏆"),
  subtitle:
    "Volunteering, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "INDIAN SOCIETY FOR ENGINEERING EDUCATION RESEARCH (ISEER)",
      subtitle:
        "Served as a Student Ambassador for ISEER, promoting engineering education and research.",
      image: require("./assets/images/ISEER_logo.png"),
      imageAlt: "ISEER Logo",
      footerLink: []
    },
    {
      title: "Certified with AWS Machine learning",
      subtitle:
        "A comprehensive course on AWS Machine Learning, covering various aspects of machine learning and its applications.",
      image: require("./assets/images/aws_logo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1saOuwV7NJo7c0iR5cPR_63UaIhpFsmkP/view"
        }
      ]
    },

    {
      title: "Certified with programming, data structures and algorithms using Python",
      subtitle: "A comprehensive course on Python programming, data structures, and algorithms.",
      image: require("./assets/images/nptel_logo.png"),
      imageAlt: "NPTEL Logo",
      footerLink: []
    }
  ],
  display: true 
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", 
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false 
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false 
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 5512636785",
  email_address: "koushikanitharaja@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", 
  display: false 
};

const isHireable = true; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
