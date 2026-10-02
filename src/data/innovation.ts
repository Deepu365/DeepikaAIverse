export interface InnovationItem {
  id: string;
  title: string;
  badge: string;
  category: string;
  summary: string;
  status: string;
  keyPillars: {
    title: string;
    description: string;
  }[];
  techFocus: string[];
}

export const innovationData: InnovationItem[] = [
  {
    id: "smart-travel-tourism",
    title: "Tourist Safety & Travel Trust Platform",
    badge: "Company Idea Proposal & Prototype",
    category: "TravelTech & Civic Safety",
    status: "Company Idea Proposal & Working Prototype",
    summary: "An innovation concept focused on improving smart travel and tourism experiences through technology. Designed to resolve traveler uncertainty by aggregating verified situational alerts, emergency protocols, and localized tourist assistance into a single digital touchpoint.",
    keyPillars: [
      {
        title: "Trust-Centric Travel Intelligence",
        description: "Synthesizing verified regional advisories, safety indices, and essential local amenities to empower travelers in unfamiliar environments."
      },
      {
        title: "Rapid Emergency Orchestration",
        description: "Providing instantaneous, one-tap access to localized police, medical, and embassy emergency services without relying on generic web search."
      },
      {
        title: "Lightweight Mobile Accessibility",
        description: "Engineered as an ultra-fast, responsive web interface that functions reliably under variable travel network conditions."
      }
    ],
    techFocus: [
      "Responsive React",
      "Civic & Travel APIs",
      "Heuristic Verification",
      "Mobile-First UI",
      "Edge Deployment"
    ]
  }
];
