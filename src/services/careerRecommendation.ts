import { domainResumes } from "../data/resumes";
import { projectsData } from "../data/projects";

export interface CareerRecommendationInput {
  targetRole: string;
  currentSkills: string[];
  experienceLevel: "Fresher / Student" | "Early Career (0-1 yr)" | "Junior (1-2 yrs)" | "Transitioning";
}

export interface CareerRecommendationResult {
  domain: string;
  matchScore: number;
  roleTitle: string;
  recommendedResume: string;
  resumeFileName: string;
  relevantSkills: string[];
  skillGaps: string[];
  learningFocus: string[];
  relevantProjects: {
    name: string;
    description: string;
    technologies: string[];
    liveDemoUrl?: string;
    githubUrl?: string;
  }[];
  strategicAdvice: string;
}

export function generateCareerRecommendation(input: CareerRecommendationInput): CareerRecommendationResult {
  const normalizedTarget = (input.targetRole || "").toLowerCase().trim();
  const normalizedUserSkills = (input.currentSkills || []).map(s => s.toLowerCase().trim());

  // Domain score mapping
  let bestDomain = domainResumes[0];
  let highestScore = -1;

  for (const domain of domainResumes) {
    let score = 0;
    const domainKeywords = [
      domain.domain.toLowerCase(),
      domain.shortName.toLowerCase(),
      ...domain.targetRoles.map(r => r.toLowerCase()),
      ...domain.skills.map(s => s.toLowerCase())
    ];

    // Check target role similarity
    for (const keyword of domainKeywords) {
      if (normalizedTarget.includes(keyword) || keyword.includes(normalizedTarget)) {
        score += 5;
      }
    }

    // Check overlapping skills
    for (const s of domain.skills) {
      if (normalizedUserSkills.includes(s.toLowerCase())) {
        score += 3;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestDomain = domain;
    }
  }

  // If no strong match, fall back to best matching role by name
  if (highestScore <= 0) {
    if (normalizedTarget.includes("python") || normalizedTarget.includes("flask")) {
      bestDomain = domainResumes.find(d => d.id === "python-developer") || domainResumes[0];
    } else if (normalizedTarget.includes("gen") || normalizedTarget.includes("rag") || normalizedTarget.includes("llm")) {
      bestDomain = domainResumes.find(d => d.id === "genai-developer") || domainResumes[0];
    } else if (normalizedTarget.includes("full") || normalizedTarget.includes("web") || normalizedTarget.includes("mern")) {
      bestDomain = domainResumes.find(d => d.id === "full-stack-developer") || domainResumes[0];
    } else if (normalizedTarget.includes("front") || normalizedTarget.includes("react")) {
      bestDomain = domainResumes.find(d => d.id === "frontend-developer") || domainResumes[0];
    } else if (normalizedTarget.includes("back") || normalizedTarget.includes("node") || normalizedTarget.includes("api")) {
      bestDomain = domainResumes.find(d => d.id === "backend-developer") || domainResumes[0];
    } else if (normalizedTarget.includes("data") || normalizedTarget.includes("analyst") || normalizedTarget.includes("analytics")) {
      bestDomain = domainResumes.find(d => d.id === "data-science") || domainResumes[0];
    } else if (normalizedTarget.includes("software") || normalizedTarget.includes("sde")) {
      bestDomain = domainResumes.find(d => d.id === "software-developer") || domainResumes[0];
    } else {
      bestDomain = domainResumes.find(d => d.id === "general-fresher") || domainResumes[0];
    }
  }

  // Calculate skill overlaps and gaps
  const matchedSkills: string[] = [];
  const missingSkills: string[] = [];

  for (const requiredSkill of bestDomain.skills) {
    if (normalizedUserSkills.includes(requiredSkill.toLowerCase())) {
      matchedSkills.push(requiredSkill);
    } else {
      missingSkills.push(requiredSkill);
    }
  }

  // Gather relevant projects
  const relevantProjects = projectsData.filter(proj => {
    return bestDomain.projects.some(pName => pName.toLowerCase().includes(proj.name.toLowerCase().slice(0, 10))) ||
      proj.technologies.some(tech => bestDomain.skills.includes(tech));
  }).slice(0, 3).map(p => ({
    name: p.name,
    description: p.tagline,
    technologies: p.technologies,
    liveDemoUrl: p.liveDemoUrl,
    githubUrl: p.githubUrl
  }));

  // Learning focus curriculum
  const learningFocus = missingSkills.slice(0, 4).map(skill => {
    return `Deepen practical command of ${skill} with end-to-end repository implementations`;
  });
  if (learningFocus.length === 0) {
    learningFocus.push("Optimize system latency and edge deployments for production scale");
    learningFocus.push("Author comprehensive automated test suites and CI/CD pipelines");
  }

  // Match score calculation
  const totalTrackSkills = bestDomain.skills.length;
  const matchRatio = matchedSkills.length / Math.max(totalTrackSkills, 1);
  const matchScore = Math.min(96, Math.max(68, Math.round(70 + matchRatio * 26)));

  const strategicAdvice = `To target MNC opportunities in ${bestDomain.domain}, prioritize bridging the gap in [${missingSkills.slice(0, 3).join(", ") || "advanced production scalability"}]. Review Deepika Pamoti's relevant projects (${bestDomain.projects.slice(0, 2).join(", ")}) to observe practical implementation standards.`;

  return {
    domain: bestDomain.domain,
    matchScore,
    roleTitle: bestDomain.roleTitle,
    recommendedResume: bestDomain.resumeFile,
    resumeFileName: bestDomain.resumeFile.split("/").pop() || "Resume.pdf",
    relevantSkills: matchedSkills.length > 0 ? matchedSkills : bestDomain.skills.slice(0, 4),
    skillGaps: missingSkills.slice(0, 5),
    learningFocus,
    relevantProjects,
    strategicAdvice
  };
}
