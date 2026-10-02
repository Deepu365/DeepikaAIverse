export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  score: string;
  badge: string;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology - CSE (Artificial Intelligence & Data Science)",
    institution: "Satya Institute of Technology and Management (SITAM)",
    location: "Vizianagaram, Andhra Pradesh",
    period: "Sep 2023 – April 2027",
    scoreLabel: "CGPA",
    score: "8.5 / 10",
    badge: "Undergraduate (Final Year)",
    highlights: [
      "Pursuing B.Tech in AI & Data Science with strong foundation in algorithms and software engineering",
      "Lead integration developer for patent-published CCTV face recognition system",
      "Active Class Representative and Technical Coordinator"
    ]
  },
  {
    id: "intermediate",
    degree: "Intermediate - MPC (Mathematics, Physics, Chemistry)",
    institution: "Satya Sai Junior College",
    location: "Palakonda, Andhra Pradesh",
    period: "June 2021 – April 2023",
    scoreLabel: "Percentage",
    score: "80.3%",
    badge: "Senior Secondary (12th)",
    highlights: [
      "Completed Intermediate education with high distinction in Mathematics and Physical Sciences",
      "Built rigorous foundation in analytical thinking, problem-solving, and quantitative concepts"
    ]
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC - 10th Standard)",
    institution: "Vivekanandha High School",
    location: "Palakonda, Andhra Pradesh",
    period: "Passed 2021",
    scoreLabel: "Board",
    score: "First Class",
    badge: "Secondary Education (10th)",
    highlights: [
      "Board of Secondary Education (Andhra Pradesh)",
      "Strong academic excellence across sciences and mathematics",
      "Active participant in school competitions and science exhibitions"
    ]
  }
];
