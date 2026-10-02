export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  employmentType: string;
  badge: string;
  description: string;
  responsibilities: string[];
  technologiesWorkedOn: string[];
  skillsGained: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "pixelwind-backend",
    role: "Backend Developer Intern",
    company: "Pixelwind Technologies",
    location: "Vizag, Andhra Pradesh",
    duration: "6 Months",
    period: "July 2026 – Present",
    employmentType: "Internship",
    badge: "Current / Active",
    description: "Developed and integrated backend APIs for web applications using server-side technologies, database drivers, and RESTful architectural principles.",
    responsibilities: [
      "Engineered secure and modular RESTful backend APIs with Node.js and Python for high-performance web applications",
      "Integrated SQL and MongoDB database schemas with optimized query performance and request/response mapping",
      "Executed comprehensive API testing with Postman, ensuring schema compliance and robust error handling",
      "Handled backend request routing, authentication guards, and data serialization across full-stack deliverables"
    ],
    technologiesWorkedOn: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "SQL",
      "MongoDB",
      "Postman"
    ],
    skillsGained: [
      "Production RESTful API architecture",
      "Database integration & CRUD optimizations",
      "API testing & debugging workflows",
      "Server-side error handling & payload security"
    ]
  },
  {
    id: "pixelwind-genai",
    role: "Generative AI Developer Intern",
    company: "Pixelwind Technologies",
    location: "Vizag, Andhra Pradesh",
    duration: "2 Months",
    period: "April 2026 – June 2026",
    employmentType: "Internship",
    badge: "Completed",
    description: "Developed and explored Generative AI applications using LLM-based workflows, prompt engineering, and external foundation API integrations.",
    responsibilities: [
      "Designed and tested prompt-based interactions and conversational workflows using LLM APIs",
      "Implemented prototype Retrieval-Augmented Generation (RAG) pipelines for context-grounded AI responses",
      "Explored machine learning and generative AI models using Python and Jupyter Notebook experiments",
      "Collaborated with cross-functional teams to integrate AI models into interactive web prototypes"
    ],
    technologiesWorkedOn: [
      "Python",
      "Generative AI",
      "LLM APIs",
      "Prompt Engineering",
      "Jupyter Notebook",
      "RAG Workflows"
    ],
    skillsGained: [
      "LLM orchestration and prompt design",
      "Retrieval context grounding",
      "AI application prototyping",
      "Generative model evaluation"
    ]
  },
  {
    id: "apsche-datascience",
    role: "Data Science Intern",
    company: "APSCHE (Andhra Pradesh State Council of Higher Education)",
    location: "Vizianagaram, Andhra Pradesh",
    duration: "2 Months",
    period: "May 2025 – July 2025",
    employmentType: "Internship",
    badge: "State Council Certified",
    description: "Executed hands-on data analysis, exploratory data visualization, preprocessing, and machine learning model training as part of government-backed Data Science practical programs.",
    responsibilities: [
      "Performed data cleaning, missing value imputation, and feature preparation using Pandas and NumPy",
      "Built and evaluated supervised machine learning models with Scikit-learn for predictive analytics",
      "Designed data visualization graphs and analytical charts to uncover trends and patterns",
      "Worked in a structured, deadline-driven engineering environment with high attention to data fidelity"
    ],
    technologiesWorkedOn: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Jupyter Notebook"
    ],
    skillsGained: [
      "Exploratory Data Analysis (EDA)",
      "Model training, tuning & evaluation",
      "Data wrangling and statistical validation",
      "Real-world data science workflows"
    ]
  }
];
