export interface ProfileData {
  name: string;
  tagline: string;
  roleTitle: string;
  rotatingRoles: string[];
  careerObjective: string;
  phone: string;
  degree: string;
  institution: string;
  location: string;
  hometown: string;
  duration: string;
  status: string;
  cgpa: string;
  bio: string;
  extendedBio: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    vercel: string;
    location: string;
  };
  highlights: {
    label: string;
    sublabel: string;
    detail: string;
    icon: string;
  }[];
  areasOfInterest: {
    id: string;
    name: string;
    shortDesc: string;
    resumeFileName: string;
    icon: string;
    color: string;
    skills: string[];
  }[];
  dimensions: {
    title: string;
    subtitle: string;
    description: string;
    tag: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Deepika Pamoti",
  tagline: "Building practical AI-powered software solutions from idea to deployment.",
  roleTitle: "AI & Data Science Student | Python Developer | AI/ML & GenAI Enthusiast",
  rotatingRoles: [
    "AI & Data Science Student",
    "Python Developer",
    "GenAI & LLM Solutions Enthusiast",
    "Full-Stack Web Developer",
    "Java & Backend Engineer",
  ],
  careerObjective:
    "Motivated and detail-oriented B.Tech Artificial Intelligence & Data Science undergraduate with hands-on internship experience in GenAI, Backend API engineering, and Data Science. Proven track record with a published patent, Smart India Hackathon victory, and live deployed civic-tech platforms. Seeking an entry-level software engineering role (AI/ML, GenAI, Python, Java, or Full-Stack) in a forward-thinking MNC where I can build scalable, high-impact software solutions.",
  phone: "6300496052",
  degree: "B.Tech in CSE (Artificial Intelligence & Data Science)",
  institution: "Satya Institute of Technology and Management (SITAM)",
  location: "Visakhapatnam / Palakonda, Andhra Pradesh, India",
  hometown: "Palakonda, Andhra Pradesh",
  duration: "Sep 2023 – April 2027",
  status: "Final-Year Student",
  cgpa: "8.5",
  bio: "Final-year B.Tech CSE (AI & Data Science) student skilled in Python, Java, React, Node.js, SQL, and Generative AI. Proven experience through internships at Pixelwind Technologies and APSCHE, a published CCTV face recognition patent, and national hackathon triumphs.",
  extendedBio:
    "I specialize in bridging cutting-edge AI/ML models with production-grade full-stack engineering. Having worked as both a Backend Developer Intern and GenAI Developer Intern at Pixelwind, alongside a Data Science internship at APSCHE, I bring end-to-end execution capacity from data analysis and REST microservices to mobile-first React user interfaces.",
  contact: {
    email: "pamotideepika@gmail.com",
    phone: "6300496052",
    github: "https://github.com/Deepu365",
    linkedin: "https://www.linkedin.com/in/deepika-pamoti",
    vercel: "https://ais-pre-ffvmyzen7ykgxhdxsyt6wc-171515647651.asia-southeast1.run.app",
    location: "Palakonda / Visakhapatnam, Andhra Pradesh",
  },
  highlights: [
    {
      label: "B.Tech CSE (AI&DS)",
      sublabel: "2023–2027",
      detail: "SITAM Vizianagaram (8.5 CGPA)",
      icon: "GraduationCap",
    },
    {
      label: "3 Internships",
      sublabel: "Industry Experience",
      detail: "Pixelwind (Backend & GenAI) + APSCHE",
      icon: "Briefcase",
    },
    {
      label: "Patent Published",
      sublabel: "Intellectual Property",
      detail: "RTSP CCTV Attendance System",
      icon: "ShieldCheck",
    },
    {
      label: "Hackathon Winner",
      sublabel: "Smart India Hackathon",
      detail: "National Engineering Champion",
      icon: "Trophy",
    },
    {
      label: "NCC B & C Cadet",
      sublabel: "Military Discipline",
      detail: "JNTU-GV Parade Participant",
      icon: "Award",
    },
    {
      label: "Full-Stack + AI",
      sublabel: "Core Stack",
      detail: "React, Node, Python, Java, SQL",
      icon: "Layers",
    },
  ],
  areasOfInterest: [
    {
      id: "ai-ml-genai",
      name: "AI / ML & Generative AI",
      shortDesc: "Machine Learning, Deep Learning, Computer Vision, RAG Pipelines, FAISS & LLM APIs.",
      resumeFileName: "Deepika_Pamoti_AI_ML_GenAI_Resume.pdf",
      icon: "BrainCircuit",
      color: "from-purple-500 to-indigo-500",
      skills: ["Machine Learning", "Deep Learning", "Generative AI", "RAG Architecture", "Computer Vision", "OpenCV", "FAISS", "Python", "Gemini API"],
    },
    {
      id: "full-stack-web",
      name: "Full-Stack & Web Development",
      shortDesc: "React.js, Node.js, Express.js, MongoDB, HTML5/CSS3, RESTful APIs & CivicSense Deployment.",
      resumeFileName: "Deepika_Pamoti_Full_Stack_Resume.pdf",
      icon: "Globe",
      color: "from-blue-500 to-cyan-500",
      skills: ["React.js", "Node.js", "Express.js", "JavaScript (ES6+)", "HTML5/CSS3", "REST APIs", "MongoDB", "SQL", "Tailwind CSS"],
    },
    {
      id: "python-backend",
      name: "Python & Backend Developer",
      shortDesc: "Python Flask APIs, Java OOP, SQL, MongoDB, Postman testing & Pixelwind 6-Month Backend Internship.",
      resumeFileName: "Deepika_Pamoti_Python_Backend_Resume.pdf",
      icon: "Terminal",
      color: "from-emerald-400 to-teal-500",
      skills: ["Python", "Java", "Flask", "Node.js", "REST APIs", "SQL", "MongoDB", "Postman", "OpenCV", "Git"],
    },
  ],
  dimensions: [
    {
      title: "BUILD",
      subtitle: "Full-Stack & Backend Systems",
      description: "Production web applications like CivicSense, AI Mock Interview, and REST API microservices.",
      tag: "Engineering",
    },
    {
      title: "INNOVATE",
      subtitle: "Hackathons & Startup Proposals",
      description: "Winner of Smart India Hackathon and creator of the Smart Tourism innovation concept proposal.",
      tag: "Initiative",
    },
    {
      title: "PROVE",
      subtitle: "Patent & Industry Internships",
      description: "Published CCTV facial attendance patent and verified internships at Pixelwind & APSCHE.",
      tag: "Validation",
    },
  ],
};
