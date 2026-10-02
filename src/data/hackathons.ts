export interface HackathonItem {
  id: string;
  name: string;
  badge: string;
  edition?: string;
  problemStatement: string;
  projectTitle: string;
  myContribution: string;
  technologies: string[];
  outcome: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  summary: string;
}

export const hackathonsData: HackathonItem[] = [
  {
    id: "smart-india-hackathon",
    name: "Smart India Hackathon (SIH)",
    badge: "Hackathon Winner",
    edition: "National Finalist & Winner",
    problemStatement: "Addressing critical public sector and civic engagement bottlenecks with scalable digital technology for citizens and municipal administrators.",
    projectTitle: "CivicSense – Citizen Services Platform",
    myContribution: "Led frontend architecture, built responsive citizen grievance submission flows, designed status update tracking, and integrated the administrative review dashboard.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    outcome: "Winner — Selected as winning solution among national finalists after intense 36-hour continuous prototyping and jury evaluation.",
    githubUrl: "https://github.com/Deepu365/Civic-Sense-App.git",
    liveDemoUrl: "https://civic-sense-app-9z87.vercel.app",
    summary: "Built and deployed an operational mobile-first citizen services system enabling geo-referenced grievance reporting and municipal resolution oversight."
  },
  {
    id: "travel-safety-hackathon",
    name: "Tourism & Safety Innovation Challenge",
    badge: "Featured Prototype",
    edition: "Regional Innovation Meet",
    problemStatement: "Enhancing traveler confidence and rapid incident response in unfamiliar destinations through verified, context-sensitive technology.",
    projectTitle: "Tourist Safety Trust Assistant",
    myContribution: "Designed conversational safety interaction flows, emergency resource directory, and responsive mobile web application deployed live on Vercel.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "AI Prompt Logic", "Vercel"],
    outcome: "Successfully demonstrated working live prototype evaluated for civic and tourism tech utility.",
    liveDemoUrl: "https://tourist-safety-trust-assistant.vercel.app",
    summary: "Deployed active web companion providing instant travel guidance and emergency preparedness checkpoints."
  },
  {
    id: "career-tech-hackathon",
    name: "National Student Innovation Showcase",
    badge: "Recognized Submission",
    edition: "Academic Tech Summit",
    problemStatement: "Bridging the gap between engineering curriculum competencies and real-world tech industry hiring tracks.",
    projectTitle: "AI-Powered Career Pathfinder Navigator",
    myContribution: "Created the technical domain taxonomy, wrote the algorithmic gap detection rules, and authored open-source repository.",
    technologies: ["Python", "React", "Gemini API", "JSON Rule Engine", "Tailwind CSS"],
    outcome: "Published full open-source implementation on GitHub.",
    githubUrl: "https://github.com/Deepu365/AI-Powered-Career-Pathfinder-Navigator.git",
    summary: "Constructed deterministic roadmap generator mapping student abilities to MNC recruitment standards."
  }
];

export const hackathonTimelineStages = [
  {
    stage: "01. IDEA",
    description: "Deconstructing the real-world friction point through user personas and domain research."
  },
  {
    stage: "02. PROBLEM",
    description: "Defining precise technical constraints, system requirements, and user touchpoints."
  },
  {
    stage: "03. PROTOTYPE",
    description: "Rapid architectural wireframing, schema draft, and core proof-of-concept validation."
  },
  {
    stage: "04. DEVELOPMENT",
    description: "Intense coding sprint: connecting APIs, frontend components, and state management."
  },
  {
    stage: "05. DEMO",
    description: "Live functional deployment on Vercel with demonstrable edge-case resilience."
  },
  {
    stage: "06. RESULT",
    description: "Jury presentation, technical audit, and validated real-world impact recognition."
  }
];
