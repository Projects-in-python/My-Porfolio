/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Uttam Singh's Portfolio",
  description:
    "Senior Flutter Developer with 4+ years of experience designing, developing, and deploying scalable Android and iOS applications using Flutter and Dart.",
  og: {
    title: "Uttam Singh Portfolio",
    type: "website",
    url: "https://github.com/Supercool-Coder",
  },
};

//Home Page
const greeting = {
  title: "Uttam Singh",
  logo_name: "UttamSingh",
  // nickname: "layman_brother",
  subTitle:
    "Senior Flutter Developer — Mobile Application Architect — Team Lead. Experienced in enterprise mobile application development, Clean Architecture, MVVM, and SOLID Principles.",
  resumeLink:
    "https://drive.google.com/file/d/1WnmWohnMGH9RyQoQAaii4Ayq-PsgvkWn/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/Supercool-Coder",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:uttampbh123@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Cross-Platform Mobile Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing high-performance cross-platform applications for Android, iOS, Windows, macOS, Linux, and Web using Flutter and Dart",
        "⚡ Building scalable, responsive, and pixel-perfect user interfaces with reusable components and adaptive layouts",
        "⚡ Integrating native platform features using Platform Channels, third-party SDKs, REST APIs, GraphQL, and WebSockets",
        "⚡ Delivering production-ready applications through the complete Software Development Life Cycle (SDLC), from architecture and development to testing, deployment, and maintenance",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#0175C2",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "iOS & macOS",
          fontAwesomeClassname: "simple-icons:apple",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Web",
          fontAwesomeClassname: "simple-icons:googlechrome",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
    {
      title: "Architecture, Design Patterns & State Management",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing scalable Flutter applications using Clean Architecture, MVVM, MVC, and SOLID principles",
        "⚡ Managing application state with Bloc, Cubit, Riverpod, Provider, and GetX based on project requirements",
        "⚡ Implementing Dependency Injection using GetIt with Repository, Service, and Use Case patterns",
        "⚡ Building modular, maintainable, and testable applications following industry best practices",
      ],
      softwareSkills: [
        {
          skillName: "Clean Architecture",
          fontAwesomeClassname: "mdi:layers-triple",
          style: {
            color: "#FF9800",
          },
        },
        {
          skillName: "MVVM",
          fontAwesomeClassname: "mdi:vector-polyline",
          style: {
            color: "#7B1FA2",
          },
        },
        {
          skillName: "MVC",
          fontAwesomeClassname: "mdi:graph-outline",
          style: {
            color: "#26A69A",
          },
        },
        {
          skillName: "Bloc",
          fontAwesomeClassname: "tabler:stack-2",
          style: {
            color: "#0175C2",
          },
        },
        {
          skillName: "Cubit",
          fontAwesomeClassname: "tabler:cube",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Riverpod",
          fontAwesomeClassname: "mdi:waves",
          style: {
            color: "#42A5F5",
          },
        },
        {
          skillName: "Provider",
          fontAwesomeClassname: "mdi:database-sync",
          style: {
            color: "#FFB300",
          },
        },
        {
          skillName: "GetX",
          fontAwesomeClassname: "mdi:lightning-bolt",
          style: {
            color: "#9C27B0",
          },
        },
        {
          skillName: "GetIt",
          fontAwesomeClassname: "mdi:connection",
          style: {
            color: "#4CAF50",
          },
        },
      ],
    },
    {
      title: "Offline-First Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building offline-first Flutter applications with intelligent local data persistence and synchronization",
        "⚡ Implementing local databases using Isar, Hive, SQLite, and Secure Storage for high-performance offline access",
        "⚡ Designing repository-based caching strategies with automatic background synchronization and conflict resolution",
        "⚡ Developing resilient applications that seamlessly switch between offline and online modes with optimized data consistency",
      ],
      softwareSkills: [
        {
          skillName: "Isar",
          fontAwesomeClassname: "mdi:database",
          style: {
            color: "#00BCD4",
          },
        },
        {
          skillName: "Hive",
          fontAwesomeClassname: "simple-icons:hive",
          style: {
            color: "#F9A825",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#0F80CC",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "REST API",
          fontAwesomeClassname: "mdi:api",
          style: {
            color: "#1976D2",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E10098",
          },
        },
      ],
    },
    {
      title: "Flutter Automation & Testing",
      fileName: "",
      skills: [
        "⚡ Automating Flutter application testing using Unit, Widget, Integration, and End-to-End tests",
        "⚡ Managing Firebase App Distribution, Crashlytics, Analytics, Remote Config, and Performance Monitoring",
        "⚡ Performing cross-platform UI automation using Appium and Firebase Test Lab",
        "⚡ Automating code generation, localization, asset management, and release versioning with Flutter tooling",
      ],
      softwareSkills: [
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Appium",
          fontAwesomeClassname: "simple-icons:appium",
          style: {
            color: "#662D91",
          },
        },
        {
          skillName: "Fastlane",
          fontAwesomeClassname: "simple-icons:fastlane",
          style: {
            color: "#00C853",
          },
        },
        {
          skillName: "Codemagic",
          fontAwesomeClassname: "simple-icons:codemagic",
          style: {
            color: "#F45D48",
          },
        },
        {
          skillName: "JUnit",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#E76F00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Supercool_05/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/supercool7151",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/supercoolcoder",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/CoderSupercool",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@supercool/",
    },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chhatrapati Shivaji Maharaj University",
      subtitle: "Master of Computer Applications (MCA)",
      logo_path: "CSMU_Logo.png",
      alt_name: "CSMU",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Master of Computer Applications (MCA) with a strong foundation in advanced software development, system design, and modern computing technologies.",
        "⚡ Studied Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence, Cloud Computing, Web Technologies, and Mobile Application Development.",
        "⚡ Built industry-focused projects using Flutter, Firebase, REST APIs, SQL, and modern software architecture while strengthening problem-solving and software engineering skills.",
      ],
      website_link:
        "https://csmu.ac.in/admissions_open_2026/?utm_source=gladowl&utm_medium=Media1&utm_campaign=GO100_CTSH_Zone2&utm_adgroup={adgroup}&utm_adgroupid=196691705722&utm_location={location}&utm_keyword=csmu&utm_matchype=p&utm_device=c&utm_devicemodel=&utm_placement=&utm_target=&utm_network=g&utm_creative=804370531673&utm_creativeid={creativeid}&utm_campaignid=23734151699&gad_source=1&gad_campaignid=23734151699&gbraid=0AAAAA_J2RVtLk49Uq0NfINPPUPi0tWQsc&gclid=EAIaIQobChMI1uiQnfTtlQMV67pLBR1U0xwxEAAYASAAEgJ64vD_BwE",
    },
    {
      title: "University of Mumbai",
      subtitle: "Bachelor of Science in Information Technology (B.Sc. IT)",
      logo_path: "mkmp_logo.png",
      alt_name: "University of Mumbai",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Bachelor of Science in Information Technology (B.Sc. IT) with a strong foundation in computer science principles and software development.",
        "⚡ Studied core subjects including Programming, Data Structures, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering, Web Development, Object-Oriented Programming, and Computer Architecture.",
        "⚡ Developed academic and practical projects while strengthening analytical thinking, problem-solving, and software development skills.",
      ],
      website_link: "https://mkmpatel.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Engineer Intern Certificate",
      subtitle: "Uttam Singh",
      logo_path: "certificate_of_software_intern.9814414f.png",
      certificate_link: "https://www.hackerrank.com/certificates/f1bdfa34340a",
      alt_name: "Hacker Rank",
      color_code: "#8C151599",
    },
    {
      title: "REST API (Intermediate)",
      subtitle: "Uttam Singh",
      logo_path: "rest_api_intermidiate.e929324a.png",
      certificate_link: "https://www.hackerrank.com/certificates/33c284ac2ec1",
      alt_name: "Hacker Rank",
      color_code: "#1877F299",
    },
    {
      title: "SQL (Basic)",
      subtitle: "Uttam Singh",
      logo_path: "sql_baisc.4f945671.png",
      certificate_link: "https://www.hackerrank.com/certificates/4ca180f6add1",
      alt_name: "Hacker Rank",
      color_code: "#4285F499",
    },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Journey",

  description:
    "Flutter Software Engineer with 4+ years of experience building enterprise-grade Android and iOS applications. Experienced in leading development teams, architecting scalable mobile solutions, implementing Clean Architecture, and delivering production-ready applications using modern Flutter technologies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Development Team Lead",
          company: "Atoconn Systems Lab Pvt. Ltd.",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn.png",
          duration: "July 2025 - Present",
          location: "Hybrid",
          description:
            "Leading a team of 4+ Flutter developers to build enterprise-grade Android and iOS applications. Architect scalable applications using Flutter, Clean Architecture, MVVM, SOLID Principles, Repository Pattern, and Dependency Injection (GetIt). Established coding standards, mentored developers, implemented CI/CD pipelines using GitHub Actions and Fastlane, integrated Firebase, GraphQL, REST APIs, JWT/OAuth authentication, and optimized application performance by reducing startup time and memory usage.",
          color: "#0879bf",
        },
        {
          title: "Senior Software Engineer",
          company: "Atoconn Systems Lab Pvt. Ltd.",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn.png",
          duration: "December 2024 - June 2025",
          location: "Hybrid",
          description:
            "Developed scalable Flutter applications using Dart, Bloc, Cubit, Riverpod, Provider, and Clean Architecture. Designed modular mobile architectures with MVVM, Repository Pattern, Dependency Injection, and SOLID Principles. Integrated REST APIs, Firebase, GraphQL, payment gateways, and secure authentication.",
          color: "#9b1578",
        },
        {
          title: "Software Engineer",
          company: "Atoconn Systems Lab Pvt. Ltd.",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn.png",
          duration: "July 2022 - November 2024",
          location: "India",
          description:
            "Developed production-ready Flutter applications for Android and iOS with responsive UI, reusable widgets, and optimized application performance. Integrated REST APIs, Firebase Authentication, Firestore, Cloud Messaging, and secure payment workflows using Dio and HTTP.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Associate Software Intern",
          company: "Atoconn Systems Lab Pvt. Ltd.",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn.png",
          duration: "July 2022 - March 2023",
          location: "Hybrid",
          description:
            "Developed expertise in Flutter fundamentals, Python, Django, Django REST Framework, REST API development, database management, version control, and software engineering best practices.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "uttam.jpg",
    description:
      "I'm always open to discussing Flutter development, cross-platform mobile applications, software architecture, technical leadership, and exciting collaboration opportunities. Whether you have a project, a job opportunity, or simply want to connect, feel free to reach out. I typically respond within 24 hours.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  // addressSection: {
  //   title: "Address",
  //   subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
  //   locality: "San Jose",
  //   country: "USA",
  //   region: "California",
  //   postalCode: "95129",
  //   streetAddress: "Saratoga Avenue",
  //   avatar_image_path: "address_image.svg",
  //   location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  // },
  // phoneSection: {
  //   title: "",
  //   subtitle: "",
  // },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
