export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: "Web & Full Stack" | "AI & GenAI" | "Core Programming & DB" | "Systems & Cloud" | "Specialized Tech";
  badgeColor: string;
  iconName: string;
  verifiedStatus: string;
  credentialSummary: string;
  skillsAcquired: string[];
  keyTopics: string[];
  industryRelevance: string;
}

export const certificationsData: Certification[] = [
  {
    id: "ibm-frontend",
    name: "IBM Front-End Developer Professional Certificate",
    issuer: "IBM",
    category: "Web & Full Stack",
    badgeColor: "blue",
    iconName: "Layout",
    verifiedStatus: "Industry Certified",
    credentialSummary: "Comprehensive professional credential focusing on modern web development architectures, client-side rendering, and responsive component design.",
    skillsAcquired: ["React.js", "HTML5 & CSS3", "JavaScript (ES6+)", "UI/UX Best Practices", "Git"],
    keyTopics: [
      "Component lifecycle & reactive state management in React",
      "Asynchronous data fetching with RESTful APIs",
      "Cross-browser responsive styling and accessibility (a11y)",
      "Modern tooling and package management"
    ],
    industryRelevance: "Essential for Frontend and Full-Stack Engineering roles in MNC product teams."
  },
  {
    id: "cisco-backend",
    name: "Cisco Backend Developer",
    issuer: "Cisco",
    category: "Web & Full Stack",
    badgeColor: "emerald",
    iconName: "Server",
    verifiedStatus: "Industry Certified",
    credentialSummary: "Demonstrates core proficiency in server-side software design, API endpoint architecture, secure routing, and database communication.",
    skillsAcquired: ["Backend Architecture", "REST APIs", "Server Routing", "Database Drivers", "Security"],
    keyTopics: [
      "Client-server request/response lifecycles and HTTP status protocols",
      "Relational data persistence and CRUD operations",
      "Authentication handling and API endpoint protection",
      "Performance optimization for concurrent network traffic"
    ],
    industryRelevance: "Directly qualifies candidate for Backend & Software Engineer (SDE) roles."
  },
  {
    id: "linux-nodejs",
    name: "Linux Foundation – Node.js Essentials",
    issuer: "The Linux Foundation",
    category: "Systems & Cloud",
    badgeColor: "teal",
    iconName: "Terminal",
    verifiedStatus: "Industry Certified",
    credentialSummary: "Deep dive into Linux environment server processes, command-line operations, and asynchronous event-driven Node.js runtimes.",
    skillsAcquired: ["Node.js Runtimes", "Linux CLI", "Async Event Loops", "NPM Modules", "Process Management"],
    keyTopics: [
      "Non-blocking I/O event loops and asynchronous stream handling",
      "Linux terminal administration, permissions, and shell scripting",
      "Building microservices using Node.js standard libraries",
      "Debugging server crashes and process monitoring"
    ],
    industryRelevance: "Vital for DevOps, Cloud integration, and scalable microservice architectures."
  },
  {
    id: "hackerrank-python",
    name: "HackerRank Python (3-Star ★★★)",
    issuer: "HackerRank",
    category: "Core Programming & DB",
    badgeColor: "amber",
    iconName: "Code2",
    verifiedStatus: "Skill Assessed",
    credentialSummary: "Verified algorithmic problem-solving and idiomatic language mastery on HackerRank competitive coding platform.",
    skillsAcquired: ["Python Algorithms", "Data Structures", "OOP in Python", "List Comprehensions", "Error Handling"],
    keyTopics: [
      "Advanced collections, dictionaries, sets, and generator functions",
      "Algorithmic time and space complexity optimization",
      "String parsing, regex, and file processing techniques",
      "Object-oriented classes, inheritance, and magic methods"
    ],
    industryRelevance: "Serves as an objective coding test benchmark for recruitment screening."
  },
  {
    id: "hackerrank-sql",
    name: "HackerRank SQL",
    issuer: "HackerRank",
    category: "Core Programming & DB",
    badgeColor: "purple",
    iconName: "Database",
    verifiedStatus: "Skill Assessed",
    credentialSummary: "Validated competence in relational database querying, complex multi-table joins, subqueries, and window functions.",
    skillsAcquired: ["SQL Queries", "Relational Joins", "Aggregations", "Subqueries", "Data Filtering"],
    keyTopics: [
      "INNER, LEFT, RIGHT, and FULL OUTER joins across distributed tables",
      "GROUP BY aggregations with HAVING clauses",
      "Subqueries, correlated queries, and CASE conditionals",
      "Database schema normalization and indexing awareness"
    ],
    industryRelevance: "Critical for Data Science, Backend API, and Data Engineering workflows."
  },
  {
    id: "google-genai",
    name: "Google Cloud – Introduction to Generative AI",
    issuer: "Google Cloud",
    category: "AI & GenAI",
    badgeColor: "rose",
    iconName: "Sparkles",
    verifiedStatus: "Vendor Certified",
    credentialSummary: "Foundational mastery of Large Language Models (LLMs), generative mechanisms, attention layers, and Google Cloud AI studio tooling.",
    skillsAcquired: ["Generative AI", "LLMs", "Prompt Engineering", "Responsible AI", "Model Tuning"],
    keyTopics: [
      "Transformer architectures, self-attention, and tokenization",
      "Few-shot, zero-shot, and chain-of-thought prompt engineering",
      "Retrieval-Augmented Generation (RAG) paradigms",
      "Safety filters, ethics, and reducing model hallucinations"
    ],
    industryRelevance: "Direct foundation for building next-generation GenAI and LLM copilot apps."
  },
  {
    id: "greatlearning-ml",
    name: "Great Learning – Machine Learning",
    issuer: "Great Learning",
    category: "AI & GenAI",
    badgeColor: "indigo",
    iconName: "BrainCircuit",
    verifiedStatus: "Industry Certified",
    credentialSummary: "Core understanding of supervised and unsupervised machine learning algorithms, model evaluation metrics, and predictive pipelines.",
    skillsAcquired: ["Supervised ML", "Unsupervised ML", "Regression & Classification", "Model Evaluation"],
    keyTopics: [
      "Linear regression, logistic regression, decision trees, and random forests",
      "K-Means clustering and dimensional reduction",
      "Confusion matrices, precision, recall, F1-scores, and ROC-AUC curves",
      "Hyperparameter tuning and cross-validation"
    ],
    industryRelevance: "Core prerequisite for AI/ML Engineer and Applied Data Scientist roles."
  },
  {
    id: "talentbattle-iot",
    name: "Talent Battle – IoT and Robotics",
    issuer: "Talent Battle",
    category: "Specialized Tech",
    badgeColor: "sky",
    iconName: "Cpu",
    verifiedStatus: "Certified",
    credentialSummary: "Hardware-software interfacing, embedded sensor protocols, edge computing, and automated robotics feedback mechanisms.",
    skillsAcquired: ["IoT Architectures", "Sensor Integration", "Microcontrollers", "Automation Logic"],
    keyTopics: [
      "Sensors, actuators, and signal conditioning basics",
      "Embedded C and Python for microcontrollers",
      "Edge telemetry and lightweight MQTT / HTTP communication",
      "Real-time sensor data streaming to cloud interfaces"
    ],
    industryRelevance: "Connects computer vision edge cameras (like the CCTV patent) to IoT hardware."
  },
  {
    id: "oracle-oci-ai",
    name: "Oracle OCI AI Foundations Associate",
    issuer: "Oracle",
    category: "Systems & Cloud",
    badgeColor: "red",
    iconName: "Award",
    verifiedStatus: "Enterprise Certified",
    credentialSummary: "Enterprise cloud AI foundations, vision services, natural language processing, and scalable model serving infrastructure.",
    skillsAcquired: ["Cloud AI Infrastructure", "OCI Vision & Speech", "Enterprise Model Serving", "Cognitive Services"],
    keyTopics: [
      "Deploying AI inference microservices on cloud infrastructure",
      "Automated document understanding and optical character recognition (OCR)",
      "High-availability architectures for enterprise machine learning pipelines"
    ],
    industryRelevance: "Validates enterprise readiness in deploying AI within corporate cloud clouds."
  }
];
