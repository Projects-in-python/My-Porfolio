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
    url: "https://github.com/Uttammmmmmm",
  },
};

//Home Page
const greeting = {
  title: "Uttam Singh",
  logo_name: "UttamSingh",
  // nickname: "layman_brother",
  subTitle:
    "Senior Flutter Developer — Mobile Application Architect — Team Lead. Experienced in enterprise mobile application development, Clean Architecture, MVVM, and SOLID Principles.",
  resumeLink: "/resume",
  portfolio_repository: "https://github.com/Code-Making/Uttam-Singh-Portfolio",
  githubProfile: "https://github.com/Uttammmmmmm",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Uttammmmmmm",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    darkBackgroundColor: "#4A5568", // #181717 disappears on a dark page
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/uttam-singh-287690199/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@codemaking",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:uttams.singh500@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/uttampbh123",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
    darkBackgroundColor: "#3F4654", // pure black disappears on a dark page
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/codemaking?igsh=MWt3ZngweTMxODM1",
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
        "⚡ Building automated test suites for Flutter applications using Unit, Widget, Integration, and End-to-End testing",
        "⚡ Implementing Firebase App Distribution, Crashlytics, Analytics, Remote Config, and Performance Monitoring for reliable app delivery",
        "⚡ Performing cross-platform UI and device testing using Appium and Firebase Test Lab",
        "⚡ Automating code generation, localization, asset management, versioning, and release workflows using Flutter tooling",
        "⚡ Integrating CI/CD pipelines with Fastlane and Codemagic to automate testing, builds, and production releases",
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
          title: "Team Lead",
          company: "Atoconn Systems Lab Pvt. Ltd.",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn.png",
          duration: "July 2025 - Present",
          location: "Hybrid",
          description:
            "Led delivery across 3 production platforms including WowCare, WowInventory, and JSW Vessel Management System, supporting feature development, technical delivery, and production application improvements. Mentored 4+ Flutter developers through architecture discussions, code reviews, debugging, and technical guidance. Architected and delivered 3+ production Flutter solutions using Clean Architecture, MVVM, Bloc, Cubit, SOLID, and GetIt, reducing development cycles by nearly 40%. Automated mobile release workflows using GitHub Actions, Fastlane, and CI/CD, reducing release cycles by nearly 50%. Integrated 1000+ REST endpoints with Firebase, OAuth/JWT, analytics, and third-party SDKs. Improved application startup performance by approximately 40% through rendering and memory optimizations.",
          color: "#0879bf",
        },
        {
          title: "Senior Software Developer",
          company: "Atoconn Systems Lab Pvt. Ltd.",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn.png",
          duration: "July 2024 - June 2025",
          location: "Hybrid",
          description:
            "Led 4+ Flutter developers while delivering 60+ production features across PineWraps, WowInventory, and PathPulse. Built 3+ scalable Flutter products using SOLID, Bloc, Cubit, GetIt, and layered architecture, accelerating development and delivery by approximately 30%. Standardized feature architecture and reusable development patterns, reducing feature integration time by approximately 30%. Designed scalable API infrastructure using Dio, Dependency Injection, and Repository Pattern. Optimized Flutter startup performance and rendering workflows, reducing application launch latency by approximately 40%.",
          color: "#9b1578",
        },
        {
          title: "Software Developer",
          company: "Atoconn Systems Lab Pvt. Ltd.",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn.png",
          duration: "March 2023 - June 2024",
          location: "India",
          description:
            "Developed and maintained production Flutter applications by implementing responsive interfaces, reusable components, REST API integrations, and scalable application features. Implemented modular application features using Clean Architecture, Bloc/Cubit, Dio, Repository Pattern, and Dependency Injection. Collaborated with a 4+ member Flutter team to deliver production features, troubleshoot application issues, integrate backend services, and improve overall application stability.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern - Software Developer",
          company: "Atoconn Systems Lab Pvt. Ltd.",
          company_url: "https://atoconn.com/",
          logo_path: "atoconn.png",
          duration: "July 2022 - February 2023",
          location: "Hybrid",
          description:
            "Developed backend services for the Alexia Global application using Django REST Framework, implementing JWT authentication, database models, REST APIs, and Flutter application integrations.",
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

// Open Source Page
const openSourceHeader = {
  title: "Open Source",
  description:
    "I build and maintain open source tooling for the Flutter ecosystem, and release production-grade applications under permissive licenses. Everything below is live \u2014 package statistics are pulled straight from the pub.dev API each time this page loads.",
};

// Packages published by me on pub.dev. Live stats (version, likes, pub points,
// downloads) are fetched at runtime from the pub.dev API; the `fallback` values
// are only rendered if that request fails or the visitor is offline.
const pubDevPackages = {
  title: "Published Packages",
  subtitle:
    "Dart & Flutter packages I have authored and published to pub.dev, the official package registry.",
  profileLink: "https://pub.dev/packages?q=flutter_devops",
  packages: [
    {
      name: "flutter_devops",
      icon: "\ud83d\ude80",
      category: "Dart CLI \u00b7 DevOps Tooling",
      tagline: "Enterprise Flutter DevOps Toolkit",
      description:
        "A command line toolkit that automates the parts of Flutter delivery teams usually wire together by hand: CI/CD pipelines, multi-flavour environment management, architecture audits and signed release automation for every Flutter target.",
      pubUrl: "https://pub.dev/packages/flutter_devops",
      repository: "https://github.com/Code-Making/flutter_devops",
      docsUrl: "https://pub.dev/documentation/flutter_devops/latest/",
      installCommand: "dart pub global activate flutter_devops",
      highlights: [
        "CI/CD pipeline generation for GitHub Actions, Fastlane and Codemagic",
        "Environment & flavour management across dev, staging and production",
        "Architecture audits that flag Clean Architecture and SOLID violations",
        "Dependency auditing with outdated and vulnerable package reporting",
        "One-command signed release automation for Android and iOS",
      ],
      platforms: ["Android", "iOS", "Web", "Windows", "macOS", "Linux"],
      license: "MIT",
      fallback: {
        version: "0.1.5",
        published: "2026-06-20T08:27:53.704605Z",
        likeCount: 1,
        grantedPoints: 150,
        maxPoints: 160,
        downloadCount30Days: 22,
      },
    },
    {
      name: "file_anchor",
      icon: "⚓",
      category: "Flutter Plugin · File System",
      tagline: "Durable File & Directory Access",
      description:
        "A federated Flutter plugin that turns a user-picked file or folder into a durable, opaque anchor token. Pick once, persist the token, and resolve it later — access survives app restarts and reboots on every platform.",
      pubUrl: "https://pub.dev/packages/file_anchor",
      repository: "https://github.com/Code-Making/file_anchor",
      docsUrl: "https://pub.dev/documentation/file_anchor/latest/",
      installCommand: "flutter pub add file_anchor",
      highlights: [
        "Persistent access through opaque, storable anchor tokens",
        "Typed failures: AnchorStale, AnchorRevoked, AnchorUnavailable",
        "Streaming-first I/O with safe relative paths",
        "MemoryAnchor for fast, platform-free testing",
        "Capability reporting so apps adapt per platform",
      ],
      platforms: ["Android", "iOS", "Windows", "macOS", "Linux"],
      license: "MIT",
      fallback: {
        version: "0.1.0",
        published: "2026-09-13T06:13:30.219787Z",
        likeCount: 0,
        grantedPoints: 0,
        maxPoints: 160,
        downloadCount30Days: 0,
      },
    },
    {
      name: "file_anchor_platform_interface",
      icon: "🧩",
      category: "Federated Plugin · Platform Interface",
      tagline: "Shared Federated Platform Contract",
      description:
        "The common platform interface for file_anchor. Every platform implementation extends this contract, so the app-facing API stays identical across Android, iOS, macOS, Windows and Linux.",
      pubUrl: "https://pub.dev/packages/file_anchor_platform_interface",
      repository: "https://github.com/Code-Making/file_anchor",
      docsUrl:
        "https://pub.dev/documentation/file_anchor_platform_interface/latest/",
      installCommand: "flutter pub add file_anchor_platform_interface",
      highlights: [
        "Single contract shared by all platform implementations",
        "Common anchor, entry and failure types",
        "Lets third parties add new platform implementations",
      ],
      platforms: ["Android", "iOS", "Web", "Windows", "macOS", "Linux"],
      license: "MIT",
      fallback: {
        version: "0.1.0",
        published: "2026-09-13T06:04:20.811655Z",
        likeCount: 0,
        grantedPoints: 150,
        maxPoints: 160,
        downloadCount30Days: 0,
      },
    },
    {
      name: "file_anchor_path_io",
      icon: "⚙️",
      category: "Federated Plugin · dart:io Engine",
      tagline: "Shared dart:io File-System Engine",
      description:
        "A shared dart:io engine implementing file_anchor for platforms that expose real filesystem paths, so desktop and Apple implementations reuse one tested I/O core instead of duplicating it.",
      pubUrl: "https://pub.dev/packages/file_anchor_path_io",
      repository: "https://github.com/Code-Making/file_anchor",
      docsUrl: "https://pub.dev/documentation/file_anchor_path_io/latest/",
      installCommand: "flutter pub add file_anchor_path_io",
      highlights: [
        "One dart:io engine reused across path-based platforms",
        "Streaming reads and writes",
        "Relative path validation that blocks escaping the anchor",
      ],
      platforms: ["Android", "iOS", "Windows", "macOS", "Linux"],
      license: "MIT",
      fallback: {
        version: "0.1.0",
        published: "2026-09-13T06:04:33.651850Z",
        likeCount: 0,
        grantedPoints: 150,
        maxPoints: 160,
        downloadCount30Days: 0,
      },
    },
    {
      name: "file_anchor_android",
      icon: "🤖",
      category: "Federated Plugin · Android",
      tagline: "Android Storage Access Framework",
      description:
        "The Android implementation of file_anchor, built on the Storage Access Framework with persisted URI permissions for durable folder and file access.",
      pubUrl: "https://pub.dev/packages/file_anchor_android",
      repository: "https://github.com/Code-Making/file_anchor",
      docsUrl: "https://pub.dev/documentation/file_anchor_android/latest/",
      installCommand: "flutter pub add file_anchor_android",
      highlights: [
        "Storage Access Framework document and tree pickers",
        "Persisted URI permissions that survive reboots",
        "Detects revoked grants and reports them as typed failures",
      ],
      platforms: ["Android"],
      license: "MIT",
      fallback: {
        version: "0.1.0",
        published: "2026-09-13T06:04:46.453143Z",
        likeCount: 0,
        grantedPoints: 150,
        maxPoints: 160,
        downloadCount30Days: 0,
      },
    },
    {
      name: "file_anchor_ios",
      icon: "📱",
      category: "Federated Plugin · iOS",
      tagline: "iOS Security-Scoped Bookmarks",
      description:
        "The iOS implementation of file_anchor, using UIDocumentPickerViewController and security-scoped bookmarks to keep access to user-chosen files and folders.",
      pubUrl: "https://pub.dev/packages/file_anchor_ios",
      repository: "https://github.com/Code-Making/file_anchor",
      docsUrl: "https://pub.dev/documentation/file_anchor_ios/latest/",
      installCommand: "flutter pub add file_anchor_ios",
      highlights: [
        "UIDocumentPickerViewController for files and folders",
        "Security-scoped bookmarks for durable access",
        "Scoped access handled automatically around each operation",
      ],
      platforms: ["iOS"],
      license: "MIT",
      fallback: {
        version: "0.1.0",
        published: "2026-09-13T06:04:52.996796Z",
        likeCount: 0,
        grantedPoints: 140,
        maxPoints: 160,
        downloadCount30Days: 0,
      },
    },
    {
      name: "file_anchor_macos",
      icon: "💻",
      category: "Federated Plugin · macOS",
      tagline: "Native macOS Scoped File Access",
      description:
        "The macOS implementation of file_anchor, using NSOpenPanel and security-scoped bookmarks so sandboxed apps keep access to user-chosen locations.",
      pubUrl: "https://pub.dev/packages/file_anchor_macos",
      repository: "https://github.com/Code-Making/file_anchor",
      docsUrl: "https://pub.dev/documentation/file_anchor_macos/latest/",
      installCommand: "flutter pub add file_anchor_macos",
      highlights: [
        "Native NSOpenPanel file and folder picker",
        "Security-scoped bookmarks for sandboxed apps",
        "Stale bookmark detection with re-prompt support",
      ],
      platforms: ["macOS"],
      license: "MIT",
      fallback: {
        version: "0.1.0",
        published: "2026-09-13T06:09:17.414284Z",
        likeCount: 0,
        grantedPoints: 140,
        maxPoints: 160,
        downloadCount30Days: 0,
      },
    },
    {
      name: "file_anchor_windows",
      icon: "🪟",
      category: "Federated Plugin · Windows",
      tagline: "Native Windows File Picker, Zero C++",
      description:
        "The Windows implementation of file_anchor, using IFileOpenDialog and durable filesystem paths — written without a single line of C++.",
      pubUrl: "https://pub.dev/packages/file_anchor_windows",
      repository: "https://github.com/Code-Making/file_anchor",
      docsUrl: "https://pub.dev/documentation/file_anchor_windows/latest/",
      installCommand: "flutter pub add file_anchor_windows",
      highlights: [
        "Native IFileOpenDialog file and folder picker",
        "Zero C++ — no native build toolchain to maintain",
        "Durable filesystem paths via the shared dart:io engine",
      ],
      platforms: ["Windows"],
      license: "MIT",
      fallback: {
        version: "0.1.0",
        published: "2026-09-13T06:09:30.671399Z",
        likeCount: 0,
        grantedPoints: 130,
        maxPoints: 160,
        downloadCount30Days: 0,
      },
    },
    {
      name: "file_anchor_linux",
      icon: "🐧",
      category: "Federated Plugin · Linux",
      tagline: "XDG Desktop Portal Integration",
      description:
        "The Linux implementation of file_anchor, using the XDG desktop portal for native file and folder selection on the Linux desktop.",
      pubUrl: "https://pub.dev/packages/file_anchor_linux",
      repository: "https://github.com/Code-Making/file_anchor",
      docsUrl: "https://pub.dev/documentation/file_anchor_linux/latest/",
      installCommand: "flutter pub add file_anchor_linux",
      highlights: [
        "XDG desktop portal file chooser",
        "Native desktop dialogs without GTK plumbing in the app",
        "Durable filesystem paths via the shared dart:io engine",
      ],
      platforms: ["Linux"],
      license: "MIT",
      fallback: {
        version: "0.1.0",
        published: "2026-09-13T06:09:37.643586Z",
        likeCount: 0,
        grantedPoints: 150,
        maxPoints: 160,
        downloadCount30Days: 0,
      },
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Production Flutter applications I have designed, architected and shipped to the App Store and Google Play \u2014 spanning enterprise childcare management, logistics, inventory, fintech and ride hailing. Each one is built on Clean Architecture with an offline-first data layer, and most are live in the hands of real users today.",
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
    profile_image_path: "uttam.jpeg",
    description:
      "I'm always open to discussing Flutter development, cross-platform mobile applications, software architecture, technical leadership, and exciting collaboration opportunities. Whether you have a project, a job opportunity, or simply want to connect, feel free to reach out. I typically respond within 24 hours.",
  },
  // Direct, clickable ways to reach me. `value` is what the visitor sees,
  // `link` is where the card navigates.
  contactMethods: [
    {
      id: "email",
      title: "Email",
      value: "uttams.singh500@gmail.com",
      subtitle: "Best for detailed enquiries \u2014 replies within 24 hours",
      link:
        "mailto:uttams.singh500@gmail.com?subject=Let%27s%20work%20together",
      iconifyClassname: "mdi:email-outline",
      color: "#D14836",
      cta: "Send an email",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "in/uttam-singh-287690199",
      subtitle: "Professional network, roles and recruiter enquiries",
      link: "https://www.linkedin.com/in/uttam-singh-287690199/",
      iconifyClassname: "simple-icons:linkedin",
      color: "#0077B5",
      cta: "Connect on LinkedIn",
      newTab: true,
    },
    {
      id: "github",
      title: "GitHub",
      value: "@Uttammmmmmm",
      subtitle: "My personal repositories, experiments and sample apps",
      link: "https://github.com/Uttammmmmmm",
      iconifyClassname: "simple-icons:github",
      color: "#181717",
      darkColor: "#C9D4E4",
      cta: "View my code",
      newTab: true,
    },
    {
      id: "code-making",
      title: "Organisation",
      value: "Code Making",
      subtitle: "Where flutter_devops and the 24Ryde apps are published",
      link: "https://github.com/Code-Making",
      iconifyClassname: "mdi:office-building-outline",
      color: "#6E5494",
      darkColor: "#A98BD6",
      cta: "Visit the org",
      newTab: true,
    },
    {
      id: "pubdev",
      title: "pub.dev",
      value: "flutter_devops",
      subtitle: "Dart & Flutter packages I publish and maintain",
      link: "https://pub.dev/packages/flutter_devops",
      iconifyClassname: "simple-icons:dart",
      color: "#0175C2",
      cta: "See my packages",
      newTab: true,
    },
    {
      id: "youtube",
      title: "YouTube",
      value: "@codemaking",
      subtitle: "Flutter tutorials, architecture deep dives and walkthroughs",
      link: "https://www.youtube.com/@codemaking",
      iconifyClassname: "simple-icons:youtube",
      color: "#FF0000",
      cta: "Watch on YouTube",
      newTab: true,
    },
    {
      id: "location",
      title: "Location",
      value: "Mumbai, Maharashtra, India",
      subtitle: "IST (UTC+5:30) \u2014 open to remote and hybrid work",
      link: "https://maps.google.com/?q=Mumbai,Maharashtra,India",
      iconifyClassname: "mdi:map-marker-outline",
      color: "#34A853",
      cta: "View on Maps",
      newTab: true,
    },
  ],
  // Short status strip shown above the contact cards.
  availability: {
    status: "Available for new opportunities",
    isAvailable: true,
    details: [
      { label: "Response time", value: "Within 24 hours" },
      {
        label: "Open to",
        value: "Full-time \u00b7 Contract \u00b7 Consulting",
      },
      {
        label: "Work mode",
        value: "Remote \u00b7 Hybrid \u00b7 On-site (Mumbai)",
      },
      { label: "Focus", value: "Flutter architecture & team leadership" },
    ],
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
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
  openSourceHeader,
  pubDevPackages,
  contactPageData,
};
