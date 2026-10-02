export interface Achievement {
  id: string;
  orderLevel: number;
  levelBadge: string;
  title: string;
  badge: string;
  category: "Campus Activity" | "Social Awareness" | "Leadership" | "Public Speaking" | "Competition" | "Discipline" | "Intellectual Property" | "National Victory";
  description: string;
  icon: string;
  highlights: string[];
}

export const achievementsData: Achievement[] = [
  {
    id: "tech-orbit-member",
    orderLevel: 1,
    levelBadge: "Level 1: Campus Activity",
    title: "Tech Orbit Coding Club Member",
    badge: "Club Member",
    category: "Campus Activity",
    description: "Active member of Tech Orbit coding club, participating in peer code-reviews, technical hackathons, and software development workshops for junior students.",
    icon: "Orbit",
    highlights: [
      "Active participant in collegiate coding sessions and algorithmic challenges",
      "Assisted in organizing student workshops on Git, Python, and web fundamentals",
      "Collaborated on peer open-source study groups"
    ]
  },
  {
    id: "eagle-club-member",
    orderLevel: 2,
    levelBadge: "Level 2: Social Impact",
    title: "Eagle Club Member (Anti-Drug Awareness)",
    badge: "Social Impact Member",
    category: "Social Awareness",
    description: "Dedicated member of the Eagle Club focused on institutional and community anti-drug awareness, substance abuse prevention, and youth mental wellness initiatives.",
    icon: "ShieldAlert",
    highlights: [
      "Championed zero-tolerance drug abuse awareness campaigns across campus",
      "Organized student pledges, rallies, and informational seminars on healthy lifestyle",
      "Fostered a supportive, positive peer environment for collegiate youth"
    ]
  },
  {
    id: "class-representative",
    orderLevel: 3,
    levelBadge: "Level 3: Leadership",
    title: "Class Representative",
    badge: "Elected Representative",
    category: "Leadership",
    description: "Coordinated daily academic schedules and communication between faculty department heads and student cohort for the B.Tech CSE (AI&DS) program.",
    icon: "Users",
    highlights: [
      "Elected student voice for the department cohort across semesters",
      "Facilitated transparent issue resolution between faculty and students",
      "Organized departmental study groups and timetable adjustments"
    ]
  },
  {
    id: "event-anchor",
    orderLevel: 4,
    levelBadge: "Level 4: Public Speaking",
    title: "Event Anchor & Host",
    badge: "Master of Ceremonies",
    category: "Public Speaking",
    description: "Experienced event anchor and public speaker hosting flagship college symposiums, tech festivals, orientation ceremonies, and cultural gatherings.",
    icon: "Mic",
    highlights: [
      "Hosted college-wide technical symposiums and department inaugurations",
      "Demonstrated engaging public speaking, stage coordination, and audience rapport",
      "Commended by academic dignitaries for articulate event moderation"
    ]
  },
  {
    id: "ai-summit-winner",
    orderLevel: 5,
    levelBadge: "Level 5: Academic Competition",
    title: "AI Summit Quiz Winner",
    badge: "Quiz Winner",
    category: "Competition",
    description: "Secured 1st place in the technical Artificial Intelligence & Machine Learning quiz competition at the regional AI Summit.",
    icon: "Target",
    highlights: [
      "Demonstrated speed and mastery in AI/ML fundamentals, neural nets, and data science",
      "Competed against top engineering collegiate participants",
      "Recognized with merit certificate and institutional honor"
    ]
  },
  {
    id: "ncc-cadet",
    orderLevel: 6,
    levelBadge: "Level 6: National Cadet Corps",
    title: "NCC Cadet (B & C Certificates)",
    badge: "B & C Certified",
    category: "Discipline",
    description: "Earned prestigious NCC 'B' and 'C' certificates, undergoing rigorous drill, physical conditioning, and representing the unit at the JNTU-GV ceremonial parade.",
    icon: "ShieldCheck",
    highlights: [
      "Hold both NCC 'B' and 'C' National Cadet Corps Certificates",
      "Proudly participated in the official ceremonial NCC Parade at JNTU-GV",
      "Instilled with high personal discipline, teamwork, leadership, and resilience"
    ]
  },
  {
    id: "patent-published",
    orderLevel: 7,
    levelBadge: "Level 7: Intellectual Property",
    title: "Patent Published: CCTV Attendance System",
    badge: "Patent Published",
    category: "Intellectual Property",
    description: "Co-inventor and integration developer for 'RTSP-Based Automated Classroom Attendance Monitoring System Using CCTV Face Recognition' officially published in Patent Journal.",
    icon: "Award",
    highlights: [
      "Officially published in Indian Patent Office Journal",
      "Engineered real-time RTSP camera ingestion with OpenCV and Flask REST APIs",
      "Connected live facial embedding recognition to React administrative dashboard"
    ]
  },
  {
    id: "sih-winner",
    orderLevel: 8,
    levelBadge: "Level 8: National Victory",
    title: "Smart India Hackathon (SIH) Winner",
    badge: "National Champion",
    category: "National Victory",
    description: "Won premier national hackathon competing against engineering institutions across India, delivering an impactful software solution for civic and governance challenges.",
    icon: "Trophy",
    highlights: [
      "National 1st Place Champion in premier government hackathon",
      "Delivered live deployed civic tech platform (CivicSense) under intense 36-hr sprint",
      "Recognized by national jury for architecture, societal utility, and execution"
    ]
  }
];
