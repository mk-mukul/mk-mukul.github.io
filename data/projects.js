const projects = [
  {
    title: "Algorithmic Trading Application",
    projectLink: "https://trading.mkmukul.com",
    img: {
      link: "/img/trading-dark.png",
      alt: "algotrading-result",
      width: 600,
      height: 360,
    },
    desc: [
      "A production-grade algorithmic trading platform with 5+ microservices, handling real-time market data ingestion and automated trade execution — live at trading.mkmukul.com.",
      "Built with Python FastAPI and Node.js, using Redis for real-time pub/sub messaging and caching, and MongoDB for persistent trade history and market data.",
      "Features RBAC authentication, Upstox API integration for real-time market feeds, Google Sheets trade logging for audit trails, and fully automated deployment via GitHub Actions CI/CD to a VPS behind NGINX reverse proxy.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Node.js",
      "MongoDB",
      "Redis",
      "Docker",
      "GitHub Actions",
      "NGINX",
    ],
    links: [
      {
        for: "website",
        link: "https://trading.mkmukul.com",
      },
    ],
  },
  {
    title: "Alpha Chat",
    projectLink: "https://mk-mukul.github.io/website_alpha/",
    img: {
      link: "/img/websiteAlpha.png",
      alt: "website alpha",
      width: 600,
      height: 320,
    },
    desc: [
      "A full-stack real-time chat application with JWT-based authentication, live typing indicators, message read receipts, and persistent chat history.",
      "Deployed on a VPS with NGINX as a reverse proxy, handling routing and SSL termination.",
      "Features — Live Typing, Online Status, Last Seen, Sound Notifications, Friend List Management.",
    ],
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "TailwindCSS",
      "Socket.io",
      "JWT",
      "NGINX",
    ],
    links: [
      {
        for: "github",
        link: "https://github.com/mk-mukul/website_alpha",
      },
      {
        for: "website",
        link: "https://mk-mukul.github.io/website_alpha/",
      },
    ],
  },
  {
    title: "Btech-20 Website",
    projectLink: "https://mk-mukul.github.io/btech20-iitgn/",
    img: {
      link: "/img/btech20.png",
      alt: "btech-20",
      width: 600,
      height: 330,
    },
    desc: [
      "A website for IIT Gandhinagar BTech-20 students serving as a timetable, collection of online class links, and academic resources hub.",
      "During online mode, nearly 200 students visited the site daily — built and maintained entirely as a solo project.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "TailwindCSS"],
    links: [
      {
        for: "github",
        link: "https://github.com/mk-mukul/btech20-iitgn",
      },
      {
        for: "website",
        link: "https://mk-mukul.github.io/btech20-iitgn/",
      },
    ],
  },
  {
    title: "Security and Automation Tools",
    projectLink: "/img/security-assessment.png",
    img: {
      link: "/img/security-assessment.png",
      alt: "security assessment",
      width: 600,
      height: 320,
    },
    desc: [
      "Developed Linux automation scripts for vulnerability assessment and system hardening at IIT Gandhinagar, assigned officially by the institution to assess campus network security.",
      "Integrated Nmap, OWASP ZAP, and Wireshark into repeatable automated workflows for reconnaissance, port scanning, and traffic analysis.",
      "Identified vulnerabilities in the college network infrastructure and websites, and presented findings at the IIT Gandhinagar UG Poster Presentation.",
    ],
    tech: ["Linux", "Bash", "Nmap", "OWASP ZAP", "Wireshark", "Kali Linux"],
    links: [
      {
        for: "github",
        link: "https://github.com/mk-mukul/scripts",
      },
      {
        for: "website",
        link: "/img/security-assessment.png",
      },
    ],
  },
];

export default projects;
