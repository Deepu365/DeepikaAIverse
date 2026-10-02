export interface Project {
  id: string;
  name: string;
  tagline: string;
  domains: ("Web Development" | "AI / ML" | "Gen AI" | "Python Developer" | "Java Developer")[];
  categoryBadge: string;
  category?: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  technologies: string[];
  visualType: "cctv-patent" | "mobile-app" | "startup-pitch" | "chat-rag" | "ai-interview";
  badge?: string;
  isPatentProject?: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
  githubStatusText?: string;
  myContribution?: string;
  implementation?: string[];
  challenges?: string;
  result?: string;
}

export const projectsData: Project[] = [
  {
    id: "civicsense",
    name: "CivicSense – Citizen Services Platform",
    tagline: "Mobile-first citizen services platform for reporting roads, water, drainage & streetlights.",
    domains: ["Web Development", "Python Developer"],
    categoryBadge: "Full Stack • CivicTech",
    description: "A mobile-first citizen services platform designed to help citizens report local civic issues such as roads, water, drainage, garbage, and streetlights with real-time status tracking.",
    problem: "Citizens struggle with fragmented grievance channels, lack of status tracking, and delayed municipal resolution.",
    solution: "Built a centralized digital portal featuring structured grievance categories, location-aware issue submission, automated status workflows, and administrative triage dashboards.",
    architecture: "React.js Frontend → Flask / RESTful Backend APIs → MongoDB Database → Administrative Workflow Triage.",
    features: [
      "Citizen grievance submission with photographic and location landmark tagging",
      "Real-time issue status pipeline (Submitted → Under Review → In Progress → Resolved)",
      "Role-based administrative workflow for municipal dispatch and resolution",
      "Mobile-optimized responsive UI for community on-the-go reporting"
    ],
    technologies: ["React.js", "Flask", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    visualType: "mobile-app",
    githubUrl: "https://github.com/Deepu365/Civic-Sense-App.git",
    liveDemoUrl: "https://civic-sense-app-9z87.vercel.app"
  },
  {
    id: "cctv-attendance",
    name: "CCTV-Based Automated Classroom Attendance System",
    tagline: "Automated facial recognition attendance monitoring using live RTSP CCTV camera feeds.",
    domains: ["AI / ML", "Python Developer"],
    categoryBadge: "Computer Vision • Patent",
    description: "Non-intrusive classroom attendance monitoring apparatus capturing live RTSP CCTV camera video streams to identify enrolled student faces and log presence automatically.",
    problem: "Manual roll-calling wastes lecture time and is vulnerable to proxy attendance, while fingerprint hardware creates physical bottlenecks.",
    solution: "Integrated OpenCV face detection and deep facial embedding verification directly with Flask REST microservices, logging attendance securely into a database and React dashboard.",
    architecture: "CCTV Camera (RTSP) → OpenCV Frame Preprocessing → Deep Face Embeddings → Python Flask API → MongoDB/SQL → React Administrative Dashboard.",
    features: [
      "Real-time RTSP stream frame extraction from overhead classroom surveillance units",
      "Proxy-proof multi-face simultaneous identification in diverse lighting",
      "Secure backend REST API logging daily attendance with confidence metrics",
      "Professor dashboard for monthly reports and instant absentee lists"
    ],
    technologies: ["Python", "OpenCV", "Flask", "React", "MongoDB", "RTSP Streams"],
    visualType: "cctv-patent",
    badge: "PATENT PUBLISHED",
    isPatentProject: true
  },
  {
    id: "ai-interview",
    name: "AI Mock Interview Platform",
    tagline: "Simulated role-specific technical interviews with AI evaluation and instant feedback.",
    domains: ["Gen AI", "Web Development", "Java Developer"],
    categoryBadge: "GenAI • Full Stack",
    description: "An AI-powered interview readiness web platform that generates role-specific interview questions, analyzes user responses, and delivers rubric-based diagnostic performance feedback.",
    problem: "College graduates and job seekers lack on-demand, objective technical interview practice and structured feedback.",
    solution: "Developed an interactive interview canvas with Node.js and Express APIs that queries LLMs to evaluate response depth, technical accuracy, and communication clarity.",
    architecture: "React Canvas → Node.js / Express Server → LLM Evaluation Prompt Engine → PostgreSQL / MongoDB Results Store.",
    features: [
      "Role-specific interview generation for Python, Java, Full-Stack, and AI engineers",
      "Interactive session recording with question progression",
      "Diagnostic scorecard with strengths, improvement areas, and recommended skills",
      "Performance evaluation history and skill progress tracker"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "LLM APIs", "PostgreSQL"],
    visualType: "ai-interview",
    githubUrl: "https://github.com/Deepu365/AI-Powered-Career-Pathfinder-Navigator.git"
  },
  {
    id: "smart-tourism",
    name: "Smart Tourism & Traveler Safety Platform",
    tagline: "Innovation concept & prototype submitted to solve traveler safety and trusted tourism.",
    domains: ["Web Development", "AI / ML"],
    categoryBadge: "Innovation Concept • CivicTech",
    description: "A startup innovation concept and technical prototype submitted to enhance traveler confidence through verified regional alerts, trust-based safety scores, and rapid emergency protocols.",
    problem: "Tourists in unfamiliar destinations face safety ambiguities, unverified guides, and delayed access to emergency assistance.",
    solution: "Designed a centralized travel companion providing trust-verified local advisories, caution zone notifications, and one-tap emergency services.",
    architecture: "HTML5/CSS3/React Client → Node.js / Express Backend Services → Verified Civic & Travel Knowledge Base.",
    features: [
      "Traveler advisory dashboard with verified regional safety checks",
      "Emergency contact directory with instant police and medical dispatch",
      "Interactive innovation proposal submitted for Smart Travel challenges",
      "Lightweight responsive interface designed for low-bandwidth mobile use"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js"],
    visualType: "startup-pitch",
    githubUrl: "https://github.com/Deepu365/Travel-Safety-and-Trust-Assistance.git",
    liveDemoUrl: "https://tourist-safety-trust-assistant.vercel.app"
  },
  {
    id: "medicare-ai",
    name: "MediCare AI – RAG Medical Information Chatbot",
    tagline: "Retrieval-Augmented Generation assistant grounded in verified medical research documents.",
    domains: ["Gen AI", "Python Developer"],
    categoryBadge: "GenAI • RAG Pipeline",
    description: "An AI informational assistant using Retrieval-Augmented Generation (RAG) and FAISS vector stores to provide verified medical reference citations without clinical diagnosis claims.",
    problem: "General search engines often present unverified, fragmented health claims without source citations.",
    solution: "Engineered a RAG pipeline that indexes medical references in a FAISS vector database, augmenting Gemini API prompts to yield contextually constrained answers.",
    architecture: "Curated Corpus → Text Embeddings → FAISS Vector Store → Query Retrieval → Gemini API → Flask REST API → React Client.",
    features: [
      "FAISS semantic similarity document retrieval",
      "Strict informational guardrails with explicit medical disclaimers",
      "Citation preview badges showing source documents",
      "Flask backend and secure user session management"
    ],
    technologies: ["React.js", "Flask", "Gemini API", "FAISS", "Python", "MongoDB"],
    visualType: "chat-rag",
    githubUrl: "https://github.com/Deepu365/medicare-ai-chatbot.git",
    liveDemoUrl: "https://medicare-chatbot.vercel.app"
  }
];
