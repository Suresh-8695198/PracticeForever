export const hrTopicMeta = {
  title: "Situation Based Scenarios",
  description: "Handle behavioral & situational HR questions using the STAR method effectively.",
  totalQuestions: 8,
  difficulty: "Advanced",
  estimatedTime: "20 mins"
};

export const questions = [
  {
    id: "sbs-1", type: "hr-theory",
    question: "Tell me about a time you faced a difficult situation and how you handled it.",
    tips: ["Use the STAR method.", "Pick a genuine example from academics or internship.", "Focus on what YOU did, not the team."],
    keyPoints: ["Choose a specific situation", "Describe your actions clearly", "Quantify the result if possible", "Show problem-solving ability"],
    sampleAnswer: "During my final year project, our database crashed two weeks before submission and we lost significant work. While my teammates panicked, I took the lead. I recovered partial data from local backups, redistributed the work based on each member's strength, and we worked extended hours. We not only recovered but submitted on time and received an A grade. This situation taught me crisis management and staying calm under pressure.",
    answers: [{ id: "sbs-1-a1", author: "Vikram S", timeAgo: "3 days ago", text: "My example was about resolving a conflict between two teammates during a group project. I sat them down individually, understood both perspectives, found common ground, and restructured task assignments. The project ran smoothly after that.\n\nHR loved it because it showed: leadership, empathy, and problem-solving.", likes: 87, replies: 9 }]
  },
  {
    id: "sbs-2", type: "hr-theory",
    question: "What would you do if your manager asks you to work on a technology you don't know?",
    tips: ["Show willingness to learn.", "Don't express fear or reluctance.", "Mention past examples of learning quickly."],
    keyPoints: ["Express enthusiasm for learning", "Mention resources you'd use (docs, courses, mentors)", "Reference past quick-learning experiences", "Show proactive attitude"],
    sampleAnswer: "I would welcome it as a learning opportunity. I'd start by understanding the fundamentals through official documentation, online courses, and by seeking guidance from experienced colleagues. During my internship, I was asked to work with Docker, which I had never used. Within a week, I had deployed my first containerized application. I believe that with the right attitude and effort, any technology can be learned.",
    answers: [{ id: "sbs-2-a1", author: "Learning Mindset", timeAgo: "1 week ago", text: "The best answer includes a REAL EXAMPLE of when you did this before.\n\nSaying 'I would learn it' is generic.\nSaying 'I DID learn Docker in a week during my internship' is powerful.\n\nAlways back claims with evidence!", likes: 134, replies: 16 }]
  },
  {
    id: "sbs-3", type: "hr-theory",
    question: "How would you handle a disagreement with your team lead?",
    tips: ["Show respect for authority while being assertive.", "Emphasize communication and understanding.", "Never say you'd go above their head."],
    keyPoints: ["Listen to their perspective first", "Present your viewpoint with facts, not emotions", "Find common ground", "Escalate only if necessary and through proper channels"],
    sampleAnswer: "I would first try to understand my team lead's perspective completely. Then, I would present my viewpoint with supporting data or examples, in a respectful and private setting. If the disagreement persists, I would be open to trying their approach first, as they likely have more experience. If I still believe my approach is better, I might request a third-party opinion. The key is maintaining respect and professionalism throughout.",
    answers: [{ id: "sbs-3-a1", author: "Corporate Exp", timeAgo: "5 days ago", text: "Golden rule: NEVER say you'd argue with your manager.\n\nSay: 'I would respectfully share my perspective with data, but ultimately support my lead's decision while voicing my concerns professionally.'\n\nThis shows: respect, assertiveness, and maturity.", likes: 109, replies: 13 }]
  },
  {
    id: "sbs-4", type: "hr-theory",
    question: "What would you do if you are given a task with a very tight deadline?",
    tips: ["Show time management skills.", "Mention prioritization techniques.", "Don't say you'd panic or work all night."],
    keyPoints: ["Break the task into smaller milestones", "Prioritize critical features", "Communicate with stakeholders about realistic timelines", "Ask for help if needed — it's not a weakness"],
    sampleAnswer: "I would first analyze the task and break it into smaller, manageable chunks. Then I'd prioritize the most critical parts. If needed, I would communicate with my manager about the timeline constraints and suggest a phased delivery approach. I would also not hesitate to ask teammates for help with specific modules. During my college projects, I often had overlapping deadlines, and this systematic approach helped me deliver quality work on time.",
    answers: [{ id: "sbs-4-a1", author: "PM Expert", timeAgo: "2 weeks ago", text: "A great answer mentions:\n\n1. Task breakdown\n2. Priority matrix (Urgent vs Important)\n3. Team collaboration\n4. Stakeholder communication\n5. Quality vs speed trade-offs\n\nDon't just say 'I'll work overtime.' Show STRATEGY, not just effort.", likes: 98, replies: 11 }]
  },
  {
    id: "sbs-5", type: "hr-theory",
    question: "Describe a situation where you worked in a team.",
    tips: ["Highlight your specific contribution.", "Show collaborative skills.", "Mention the outcome of the teamwork."],
    keyPoints: ["Describe the team and your role", "Highlight challenges faced", "Explain your contribution specifically", "Share the outcome"],
    sampleAnswer: "During our 6th semester, I was part of a 4-member team building a college event management portal. My role was backend development using Node.js. We faced challenges with real-time notification features. I collaborated closely with the frontend developer to design an efficient WebSocket system. I also organized daily 15-minute standup calls to track progress. Our portal was adopted by the college and used for two major events.",
    answers: [{ id: "sbs-5-a1", author: "Team Player", timeAgo: "1 week ago", text: "Key mistake freshers make: Talking about 'WE did this, WE did that.'\n\nThe HR wants to know what YOU specifically contributed.\n\nBad: 'We built a website'\nGood: 'I designed the database schema, implemented 3 REST APIs, and conducted code reviews for the team.'\n\nBe specific about YOUR role!", likes: 167, replies: 20 }]
  },
  {
    id: "sbs-6", type: "hr-theory",
    question: "What would you do if you found a colleague taking credit for your work?",
    tips: ["Stay professional and calm.", "Address it directly but diplomatically.", "Focus on the work, not the person."],
    keyPoints: ["Don't react emotionally", "Address the person privately first", "Keep evidence of your contributions", "Involve management only if private discussion fails"],
    sampleAnswer: "I would first speak with the colleague privately and politely. Perhaps it was unintentional. I would say something like, 'I noticed my contribution wasn't mentioned in the presentation. Could we make sure everyone's work is properly attributed next time?' If it continues, I would keep documentation of my contributions and discuss it with my manager professionally.",
    answers: [{ id: "sbs-6-a1", author: "Workplace Wisdom", timeAgo: "4 days ago", text: "This happened to me at my internship. My approach:\n\n1. Kept all my code commits documented with timestamps\n2. Spoke to the person privately — turned out they didn't realize\n3. We agreed to clearly attribute contributions going forward\n\nKey takeaway: Always document your work. And assume good intent first.", likes: 88, replies: 10 }]
  },
  {
    id: "sbs-7", type: "hr-theory",
    question: "How would you handle working on a project that doesn't interest you?",
    tips: ["Show professionalism.", "Every project is a learning opportunity.", "Find aspects that can interest you."],
    keyPoints: ["Professionalism first — personal interest second", "Every project teaches something", "Find elements within the project that interest you", "See it as character building"],
    sampleAnswer: "As a professional, I understand that not every project will align with my personal interests. I would approach it with the mindset of finding interesting challenges within the project. Even if the domain isn't exciting to me, the technical challenges, team dynamics, or problem-solving aspects can be engaging. I would deliver my best work regardless, because integrity means doing excellent work even when no one is watching.",
    answers: [{ id: "sbs-7-a1", author: "Career Advice", timeAgo: "1 week ago", text: "Reality check: In your first 2-3 years, you rarely get to choose projects.\n\nWhat matters is:\n- Your attitude toward assigned work\n- What you learn from every project\n- How you add value regardless of interest\n\nThe best professionals I know found passion in projects they initially didn't want.", likes: 145, replies: 17 }]
  },
  {
    id: "sbs-8", type: "hr-theory",
    question: "What would you do if you made a mistake that affected the entire team?",
    tips: ["Own up to the mistake immediately.", "Don't blame others or circumstances.", "Show how you'd fix it and prevent recurrence."],
    keyPoints: ["Take immediate responsibility", "Inform the team/manager proactively", "Focus on fixing the issue first", "Implement safeguards to prevent recurrence", "Learn from the experience"],
    sampleAnswer: "I would immediately take ownership of the mistake and inform my team lead. Then I'd focus all my energy on fixing the issue as quickly as possible. After resolving it, I would conduct a personal retrospective to understand what went wrong and implement measures to prevent it from happening again. In my experience, honest acknowledgment of mistakes builds more trust than trying to hide or blame others.",
    answers: [{ id: "sbs-8-a1", author: "Senior Dev", timeAgo: "2 weeks ago", text: "In my 5 years at TCS, I've seen:\n\n- People who own mistakes → Get respected and helped\n- People who hide mistakes → Eventually get caught and lose trust\n- People who blame others → Nobody wants to work with them\n\nOwning up to mistakes is not weakness. It's the strongest thing you can do.", likes: 198, replies: 26 }]
  }
];
