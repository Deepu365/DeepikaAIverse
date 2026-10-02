export interface SkillItem {
  name: string;
  badge?: string;
  icon: string;
  proficiency: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  icon: string;
  accentColor: string;
  demoSnippet: {
    language: string;
    code: string;
    output: string;
  };
  skills: SkillItem[];
}

export interface WhatIBuildItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  technologies: string[];
}

export const whatIBuildData: WhatIBuildItem[] = [
  {
    id: "ai-apps",
    title: "AI & GenAI Solutions",
    icon: "Bot",
    description: "RAG conversational assistants, FAISS vector indexing, and structured prompt workflows with Gemini & LLM APIs.",
    technologies: ["Python", "Flask", "Gemini API", "FAISS", "React.js"],
  },
  {
    id: "backend-systems",
    title: "Backend APIs & Microservices",
    icon: "Terminal",
    description: "Robust RESTful services, database transaction pipelines, request/response serialization, and Postman testing.",
    technologies: ["Node.js", "Express.js", "Python", "SQL", "MongoDB"],
  },
  {
    id: "cv-systems",
    title: "Computer Vision Systems",
    icon: "Camera",
    description: "Live RTSP camera video stream ingestion, face detection, multi-face embedding matching, and dashboard reporting (Patent Published).",
    technologies: ["OpenCV", "Python", "RTSP Streams", "Flask", "React"],
  },
  {
    id: "fullstack-web",
    title: "Full-Stack Web Applications",
    icon: "LayoutDashboard",
    description: "Mobile-first civic and consumer web portals with responsive layouts, state tracking, and edge deployments.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "MongoDB", "Vercel"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming Languages",
    shortLabel: "Languages",
    description: "Core languages used for algorithms, object-oriented design, systems, and automation.",
    icon: "Code2",
    accentColor: "from-blue-500 to-indigo-600",
    demoSnippet: {
      language: "python",
      code: `def analyze_pipeline(data_stream):\n    # Extract embeddings & execute inference\n    print("Ingesting RTSP frame tensor...")\n    detections = cv2_pipeline.detect(data_stream)\n    return f"Active detections: {len(detections)}"`,
      output: `[EXEC] Ingesting RTSP frame tensor...\n>>> Frame 1080p validated\n>>> Active detections: 42 students verified`
    },
    skills: [
      { name: "Python", badge: "Primary", icon: "Terminal", proficiency: "Advanced", description: "Flask, OpenCV, Data Science, AI/ML pipelines, scripting" },
      { name: "Java", badge: "Core", icon: "Coffee", proficiency: "Proficient", description: "OOP concepts, collections, data structures, algorithms" },
      { name: "C", badge: "Foundational", icon: "Cpu", proficiency: "Intermediate", description: "Pointers, memory management, algorithmic complexity" },
      { name: "JavaScript", badge: "ES6+", icon: "FileCode", proficiency: "Proficient", description: "Async/await, DOM manipulation, promises, modern React" },
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    shortLabel: "Frontend",
    description: "Modern component-driven single page applications with responsive styling.",
    icon: "Globe",
    accentColor: "from-cyan-500 to-blue-600",
    demoSnippet: {
      language: "jsx",
      code: `export function CivicDashboard() {\n  const [status, setStatus] = useState("RESOLVED");\n  return <StatusBadge status={status} liveUpdates={true} />;\n}`,
      output: `[RENDER] CivicSense App v2.4 initialized\n>>> Viewport: Responsive mobile/desktop\n>>> State: Synced with municipal REST endpoints`
    },
    skills: [
      { name: "React.js", badge: "Frontend", icon: "Layout", proficiency: "Advanced", description: "Hooks, state lifecycles, Tailwind CSS, Vercel deployments" },
      { name: "HTML5", badge: "Standard", icon: "Globe", proficiency: "Expert", description: "Semantic markup, accessibility, modern forms, SEO" },
      { name: "CSS3 / Tailwind", badge: "Styling", icon: "Palette", proficiency: "Advanced", description: "Flexbox, grid, animations, responsive design" },
      { name: "JavaScript", badge: "Core", icon: "FileCode", proficiency: "Proficient", description: "Event loops, functional programming, API interactions" },
    ],
  },
  {
    id: "backend-apis",
    name: "Backend & APIs",
    shortLabel: "Backend",
    description: "Robust server-side REST microservices, routing, database connectors, and API testing.",
    icon: "Server",
    accentColor: "from-emerald-500 to-teal-600",
    demoSnippet: {
      language: "javascript",
      code: `app.post("/api/v1/attendance", async (req, res) => {\n  const { studentId, timestamp } = req.body;\n  await Attendance.create({ studentId, timestamp, verified: true });\n  res.status(200).json({ status: "LOGGED" });\n});`,
      output: `[SERVER] Node.js / Express listening on port 5000\n>>> POST /api/v1/attendance - 200 OK (14ms)\n>>> Database write acknowledged`
    },
    skills: [
      { name: "Node.js", badge: "Runtime", icon: "Server", proficiency: "Advanced", description: "Asynchronous backend execution, modules, microservices" },
      { name: "Express.js", badge: "Framework", icon: "Layers", proficiency: "Advanced", description: "RESTful routing, middleware, error handling, CORS" },
      { name: "REST APIs", badge: "Architecture", icon: "Network", proficiency: "Advanced", description: "Endpoint design, HTTP specifications, JSON contracts" },
      { name: "Postman", badge: "Testing", icon: "Send", proficiency: "Proficient", description: "API automated testing, collection runners, mock endpoints" },
    ],
  },
  {
    id: "ai-genai",
    name: "AI / ML & Generative AI",
    shortLabel: "AI & GenAI",
    description: "Deep learning models, computer vision pipelines, FAISS RAG, and LLM applications.",
    icon: "BrainCircuit",
    accentColor: "from-purple-500 to-pink-600",
    demoSnippet: {
      language: "python",
      code: `import faiss\n# Query semantic embeddings\nindex = faiss.read_index("medicare.index")\nD, I = index.search(query_embedding, k=3)\ngrounded_prompt = build_rag_context(I)\nresponse = gemini.generate(grounded_prompt)`,
      output: `[RAG PIPELINE] FAISS similarity search: 3 chunks retrieved\n>>> Context grounded: Medical reference verified\n>>> Generation: Guardrails enforced with citation sources`
    },
    skills: [
      { name: "Machine Learning", badge: "Algorithms", icon: "Brain", proficiency: "Proficient", description: "Scikit-learn, regression, classification, clustering" },
      { name: "Deep Learning", badge: "Neural Nets", icon: "Cpu", proficiency: "Intermediate", description: "CNNs, embedding spaces, transfer learning" },
      { name: "Generative AI", badge: "Core", icon: "Sparkles", proficiency: "Advanced", description: "LLMs, prompt engineering, agentic workflows, API integration" },
      { name: "Computer Vision", badge: "Applied", icon: "Camera", proficiency: "Advanced", description: "OpenCV, face recognition, RTSP camera processing (Patent)" },
      { name: "RAG & FAISS", badge: "Vector Store", icon: "Database", proficiency: "Advanced", description: "Vector embeddings, contextual retrieval, document indexing" },
    ],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    shortLabel: "Databases",
    description: "Relational table schemas, structured querying, and flexible NoSQL document storage.",
    icon: "Database",
    accentColor: "from-amber-500 to-orange-600",
    demoSnippet: {
      language: "sql",
      code: `SELECT s.student_name, COUNT(a.record_id) AS attendance_count\nFROM students s\nJOIN attendance a ON s.id = a.student_id\nWHERE a.lecture_date >= CURRENT_DATE - INTERVAL '30 days'\nGROUP BY s.student_name HAVING COUNT(a.record_id) > 20;`,
      output: `[SQL EXEC] Query executed in 0.003s\n>>> 48 rows returned\n>>> Indexed primary key scan completed`
    },
    skills: [
      { name: "SQL", badge: "Relational", icon: "Table", proficiency: "Advanced", description: "Complex joins, grouping, indexing, HackerRank certified" },
      { name: "MongoDB", badge: "NoSQL", icon: "Database", proficiency: "Proficient", description: "BSON collections, aggregation pipelines, document schemas" },
    ],
  },
  {
    id: "tools",
    name: "Developer Tools & Cloud",
    shortLabel: "Dev Tools",
    description: "Version control workflows, cloud deployment pipelines, and modern developer environments.",
    icon: "Terminal",
    accentColor: "from-slate-600 to-slate-800",
    demoSnippet: {
      language: "bash",
      code: `git add . && git commit -m "feat: integrate CCTV patent pipeline"\ngit push origin main\nvercel --prod`,
      output: `[DEPLOY] Production build created successfully\n>>> Deployment URL: https://ais-pre-ffvmyzen7ykgxhdxsyt6wc-171515647651.asia-southeast1.run.app\n>>> Status: 200 OK • Edge global CDN active`
    },
    skills: [
      { name: "Git & GitHub", badge: "VCS", icon: "GitBranch", proficiency: "Advanced", description: "Branching, PRs, version history, open-source repositories" },
      { name: "VS Code", badge: "IDE", icon: "Code", proficiency: "Expert", description: "Extensions, debugging, terminal integration, linting" },
      { name: "Google AI Studio", badge: "AI Platform", icon: "Sparkles", proficiency: "Advanced", description: "Gemini model tuning, system prompts, API keys" },
      { name: "Vercel", badge: "Deployment", icon: "Cloud", proficiency: "Advanced", description: "Automated CI/CD, production hosting, domain configuration" },
    ],
  },
  {
    id: "mos-office",
    name: "MOS – Intermediate Productivity",
    shortLabel: "Office Tools",
    description: "Professional Microsoft Office Associate certifications for documentation and presentations.",
    icon: "FileSpreadsheet",
    accentColor: "from-indigo-400 to-purple-500",
    demoSnippet: {
      language: "text",
      code: `Microsoft Office Specialist Verified:\n- Microsoft Word Associate: Technical reports & patents\n- Microsoft Excel Associate: Data summaries & pivot analysis\n- Microsoft PowerPoint Associate: Technical challenge decks`,
      output: `[VERIFIED] Microsoft Office Specialist (MOS) Standard\n>>> Technical reporting & executive slide deck production`
    },
    skills: [
      { name: "Word (Associate)", badge: "Docs", icon: "FileText", proficiency: "Advanced", description: "Technical research papers, documentation, formatting" },
      { name: "Excel (Associate)", badge: "Analysis", icon: "FileSpreadsheet", proficiency: "Advanced", description: "Data tabulation, formulas, analytical charts" },
      { name: "PowerPoint (Associate)", badge: "Presentations", icon: "Presentation", proficiency: "Advanced", description: "Hackathon pitches, executive slideshows, visuals" },
    ],
  }
];
