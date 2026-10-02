export interface DomainResume {
  id: string;
  domain: string;
  shortName: string;
  roleTitle: string;
  resumeFile: string;
  description: string;
  targetRoles: string[];
  skills: string[];
  projects: string[];
  experience: string[];
  certifications: string[];
  summary: string;
  keyStrengths: string[];
}

export const domainResumes: DomainResume[] = [
  {
    id: "ai-ml-engineer",
    domain: "AI/ML Engineer",
    shortName: "AI/ML",
    roleTitle: "Artificial Intelligence & Machine Learning Engineer",
    resumeFile: "/resumes/Deepika_Pamoti_AI_ML_Resume.pdf",
    description: "Tailored for AI/ML engineering positions focusing on computer vision algorithms, neural networks, predictive modeling, and edge inference deployment.",
    targetRoles: ["AI/ML Engineer", "Machine Learning Specialist", "Computer Vision Engineer"],
    skills: ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "PyTorch", "OpenCV", "NumPy", "Pandas", "YOLO"],
    projects: [
      "CCTV-Based Automated Classroom Attendance System (Patent Published)",
      "YOLO Real-Time Object Detection",
      "MediCare AI – RAG Medical Chatbot"
    ],
    experience: [
      "GenAI Developer Intern at Pixelwind (2 Months) - AI model integration & workflows",
      "Lead Integration Developer for Patent Published RTSP Face Recognition System"
    ],
    certifications: [
      "Oracle OCI AI Foundations Associate",
      "Edygrad AI/ML Developer",
      "APSCHE Data Science",
      "Cisco Python Essentials 1"
    ],
    summary: "Final-year B.Tech AI & Data Science student (CGPA: 8.5) with hands-on expertise in computer vision, deep learning pipelines, and real-time inference systems. Published patent for CCTV face recognition attendance tracking; Winner at Smart India Hackathon.",
    keyStrengths: [
      "OpenCV & PyTorch computer vision pipelines",
      "RTSP stream frame ingestion & facial embeddings",
      "Mathematical foundations in machine learning algorithms",
      "Efficient model inference and edge optimization"
    ]
  },
  {
    id: "genai-developer",
    domain: "GenAI Developer",
    shortName: "GenAI",
    roleTitle: "Generative AI & LLM Solutions Engineer",
    resumeFile: "/resumes/Deepika_Pamoti_GenAI_Resume.pdf",
    description: "Curated for Generative AI, RAG architecture, agentic workflows, and LLM application development positions.",
    targetRoles: ["GenAI Developer", "LLM Application Engineer", "AI Solutions Architect"],
    skills: ["Generative AI", "RAG", "Gemini API", "LangChain", "FAISS", "Prompt Engineering", "Python", "Flask", "React"],
    projects: [
      "MediCare AI – RAG Medical Information Chatbot",
      "AI Mock Interview Platform",
      "AI-Powered Career Pathfinder Navigator"
    ],
    experience: [
      "GenAI Developer Intern at Pixelwind (2 Months) - Engineered prompt workflows and LLM integrations",
      "Smart India Hackathon Winner - AI-driven civic problem solving"
    ],
    certifications: [
      "Google Cloud Introduction to Generative AI",
      "Oracle OCI AI Foundations Associate",
      "Edygrad AI/ML Developer"
    ],
    summary: "GenAI-focused developer with verified internship experience at Pixelwind building conversational RAG systems, FAISS vector indexing, and structured Gemini API orchestrations paired with modern React frontends.",
    keyStrengths: [
      "Retrieval-Augmented Generation (RAG) with FAISS",
      "Prompt engineering with guardrail enforcements",
      "Connecting foundation model APIs with full-stack applications",
      "Semantic search and context grounding techniques"
    ]
  },
  {
    id: "python-developer",
    domain: "Python Developer",
    shortName: "Python",
    roleTitle: "Python Backend & Systems Developer",
    resumeFile: "/resumes/Deepika_Pamoti_Python_Developer_Resume.pdf",
    description: "Engineered for core Python roles emphasizing REST API construction, backend services, scientific packages, and automation.",
    targetRoles: ["Python Developer", "Backend Python Engineer", "Software Engineer - Python"],
    skills: ["Python", "Flask", "OpenCV", "NumPy", "Pandas", "SQL", "MongoDB", "Git", "Postman"],
    projects: [
      "CCTV-Based Automated Classroom Attendance System (Patent Published)",
      "YOLO Real-Time Object Detection",
      "MediCare AI Backend Service"
    ],
    experience: [
      "Pixelwind GenAI Developer Intern (Python microservices & APIs)",
      "Architected Python REST API backends connecting video streams to databases"
    ],
    certifications: [
      "Cisco Python Essentials 1",
      "Linux Foundation Linux Basics",
      "APSCHE Data Science"
    ],
    summary: "Skilled Python developer with strong command of object-oriented programming, data structures, Flask REST microservices, asynchronous execution, and integration with databases (SQL & MongoDB).",
    keyStrengths: [
      "Idiomatic Python architecture and clean code principles",
      "Flask REST API development with JWT & database drivers",
      "Integration of C-level libraries (OpenCV, NumPy) for high throughput",
      "Automated scripts and API testing with Postman"
    ]
  },
  {
    id: "full-stack-developer",
    domain: "Full-Stack Developer",
    shortName: "Full Stack",
    roleTitle: "Full-Stack Web & AI Application Developer",
    resumeFile: "/resumes/Deepika_Pamoti_Full_Stack_Developer_Resume.pdf",
    description: "Designed for end-to-end software roles combining responsive React single-page frontends with Node/Flask backends and relational/NoSQL databases.",
    targetRoles: ["Full-Stack Developer", "Software Engineer", "Web Application Developer"],
    skills: ["React", "JavaScript", "Node.js", "Express.js", "Flask", "Python", "MongoDB", "PostgreSQL", "Tailwind CSS"],
    projects: [
      "CivicSense – Citizen Services Platform (Live on Vercel)",
      "AI Mock Interview Platform",
      "MediCare AI – RAG Medical Assistant"
    ],
    experience: [
      "GenAI Developer Intern at Pixelwind (Full-stack AI workflows)",
      "Smart India Hackathon Winner - Rapid prototyping of full-stack citizen solutions"
    ],
    certifications: [
      "IBM Front-End Developer Professional Certificate",
      "OpenJS Node.js Essentials",
      "Cisco Python Essentials 1"
    ],
    summary: "Full-stack engineer with proven experience launching deployed applications (CivicSense, Tourist Safety Assistant). Proficient across modern React architectures, Express/Flask backends, and database orchestration.",
    keyStrengths: [
      "Modern React component architecture & state lifecycle management",
      "Robust RESTful API design with Express and Flask",
      "Database schema modeling with PostgreSQL and MongoDB",
      "Mobile-first responsive design using Tailwind CSS"
    ]
  },
  {
    id: "frontend-developer",
    domain: "Frontend Developer",
    shortName: "Frontend",
    roleTitle: "Frontend Web Developer & UI Engineer",
    resumeFile: "/resumes/Deepika_Pamoti_Frontend_Developer_Resume.pdf",
    description: "Focused on modern, responsive, accessible web interfaces, component architecture, and high-performance client state.",
    targetRoles: ["Frontend Developer", "React Developer", "UI/UX Engineer"],
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git", "Responsive Design", "REST APIs"],
    projects: [
      "CivicSense – Citizen Services Platform (Mobile-First Web App)",
      "Tourist Safety Trust Assistant",
      "AI Mock Interview Interface"
    ],
    experience: [
      "Frontend architect for hackathon-winning civic platforms",
      "Pixelwind internship client-side interface development"
    ],
    certifications: [
      "IBM Front-End Developer Professional Certificate",
      "OpenJS Node.js Essentials"
    ],
    summary: "Frontend developer specialized in React and modern CSS systems. Builds accessible, blazing-fast interfaces with deep attention to typography, mobile responsiveness, and clean component decoupling.",
    keyStrengths: [
      "Semantic HTML5, CSS3, modern JavaScript (ES6+)",
      "Component design systems using Tailwind CSS",
      "Client-side caching, form validation, and reactive UI states",
      "Mobile-responsive cross-browser testing and performance optimization"
    ]
  },
  {
    id: "backend-developer",
    domain: "Backend Developer",
    shortName: "Backend",
    roleTitle: "Backend Software & API Engineer",
    resumeFile: "/resumes/Deepika_Pamoti_Backend_Developer_Resume.pdf",
    description: "Centered on RESTful service design, database transactions, server-side caching, authentication, and secure API gateways.",
    targetRoles: ["Backend Developer", "API Engineer", "Server-Side Developer"],
    skills: ["Node.js", "Express.js", "Flask", "Python", "SQL", "PostgreSQL", "MongoDB", "Postman", "Linux"],
    projects: [
      "Classroom Attendance System Backend (Flask & RTSP Integration)",
      "AI Mock Interview Backend (Node.js & PostgreSQL)",
      "CivicSense Reporting API"
    ],
    experience: [
      "Integration Developer: Connected face recognition pipelines to Flask REST APIs and databases",
      "Pixelwind Intern: Server-side API integrations for GenAI"
    ],
    certifications: [
      "OpenJS Node.js Essentials",
      "Linux Foundation Linux Basics",
      "Cisco Python Essentials 1"
    ],
    summary: "Backend-focused developer who builds secure, documented RESTful services using Node.js and Python. Experienced in SQL transactions, NoSQL schemas, JWT authorization, and server deployment.",
    keyStrengths: [
      "API design following REST standards and OpenAPI principles",
      "Relational (PostgreSQL) and document (MongoDB) data modeling",
      "Secure authentication workflows (JWT, bcrypt, session states)",
      "Linux terminal fluency and server configuration basics"
    ]
  },
  {
    id: "data-science",
    domain: "Data Science",
    shortName: "Data Science",
    roleTitle: "Data Science & Analytical Modeling Specialist",
    resumeFile: "/resumes/Deepika_Pamoti_Data_Science_Resume.pdf",
    description: "Aimed at data science and analytics tracks requiring exploratory data analysis, feature engineering, statistical methods, and visualization.",
    targetRoles: ["Data Scientist", "Data Analyst", "Applied AI Scientist"],
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook", "SQL", "Machine Learning", "Data Wrangling"],
    projects: [
      "MediCare AI Medical Corpus Indexing & Vector Embeddings",
      "CivicSense Grievance Data Analytics & Visual Dashboard",
      "Classroom Attendance Analytical Reports"
    ],
    experience: [
      "B.Tech AI & Data Science academic rigor with 8.5 CGPA",
      "Hands-on data pipeline and preprocessing for vision and vector models"
    ],
    certifications: [
      "APSCHE Data Science",
      "Oracle OCI AI Foundations Associate",
      "Cisco Python Essentials 1"
    ],
    summary: "Data Science student with deep foundational knowledge of exploratory analysis, data cleaning, statistical evaluation, and interactive visual reporting using Pandas, NumPy, Matplotlib, and SQL.",
    keyStrengths: [
      "Exploratory Data Analysis (EDA) and hypothesis testing",
      "Data wrangling, imputation, and outlier treatment",
      "Data visualization with Matplotlib and customized dashboards",
      "Relational SQL querying, aggregation, and join optimizations"
    ]
  },
  {
    id: "software-developer",
    domain: "Software Developer",
    shortName: "Software Dev",
    roleTitle: "Software Development Engineer (SDE / Core)",
    resumeFile: "/resumes/Deepika_Pamoti_Software_Developer_Resume.pdf",
    description: "Versatile engineering profile demonstrating algorithmic thinking, clean modular design, version control discipline, and full lifecycle engineering.",
    targetRoles: ["Software Development Engineer (SDE)", "Software Engineer", "Associate Software Engineer"],
    skills: ["Python", "Java", "C", "JavaScript", "React", "Node.js", "Git", "SQL", "Linux"],
    projects: [
      "CivicSense – Citizen Services Platform",
      "CCTV-Based Automated Classroom Attendance System (Patent Published)",
      "AI Mock Interview Platform"
    ],
    experience: [
      "GenAI Developer Intern at Pixelwind (2 Months)",
      "Smart India Hackathon Winner - National Engineering Competition"
    ],
    certifications: [
      "IBM Front-End Developer Professional Certificate",
      "Cisco Python Essentials 1",
      "Linux Foundation Linux Basics"
    ],
    summary: "Solid software engineering foundation with strong algorithmic fundamentals (C, Java, Python). Proven capability delivering complete software systems from architectural planning to production.",
    keyStrengths: [
      "Data structures, algorithmic complexity, and problem solving",
      "Modular, testable, and maintainable software architecture",
      "Version control workflows (Git/GitHub) and continuous deployment",
      "Collaborative agility demonstrated across hackathons and patent teams"
    ]
  },
  {
    id: "general-fresher",
    domain: "General / Fresher",
    shortName: "Fresher / MNC",
    roleTitle: "Graduate Engineer Trainee / Early-Career Engineer",
    resumeFile: "/resumes/Deepika_Pamoti_General_Resume.pdf",
    description: "Comprehensive multi-disciplinary profile curated for MNC campus recruitment, graduate engineering programs, and early-career software roles.",
    targetRoles: ["Graduate Engineer Trainee (GET)", "Associate Software Engineer", "Junior AI Developer"],
    skills: ["Python", "C", "Java", "JavaScript", "React", "SQL", "AI/ML Basics", "Git", "Problem Solving"],
    projects: [
      "CivicSense – Citizen Services Platform",
      "CCTV Attendance Monitoring (Patent Published)",
      "Tourist Safety Trust Assistant",
      "MediCare AI Assistant"
    ],
    experience: [
      "GenAI Developer Intern at Pixelwind (2 Months)",
      "Smart India Hackathon Winner (National Recognition)"
    ],
    certifications: [
      "Google Cloud Introduction to Generative AI",
      "Oracle OCI AI Foundations Associate",
      "IBM Front-End Developer Professional Certificate",
      "Cisco Python Essentials 1"
    ],
    summary: "High-achieving final-year B.Tech student in Artificial Intelligence & Data Science (CGPA: 8.5) from SITAM. Smart India Hackathon Winner and published patent collaborator. Well-rounded in Python, Full Stack, and AI.",
    keyStrengths: [
      "High academic consistency (8.5 CGPA in AI & Data Science)",
      "National hackathon winner with real-world execution capacity",
      "Rapid learner with wide certification breadth across Google, IBM, Oracle, and Cisco",
      "Strong communication and campus leadership (Class Representative, Event Anchor)"
    ]
  }
];
