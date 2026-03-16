export const hrTopicMeta = {
  title: "Project Discussions",
  description: "Prepare for in-depth discussion about your academic and personal projects.",
  totalQuestions: 6,
  difficulty: "Advanced",
  estimatedTime: "15 mins"
};

export const questions = [
  {
    id: "pd-1", type: "hr-theory",
    question: "Explain your project in simple terms so that a non-technical person can understand.",
    tips: ["Avoid jargon and technical terms.", "Use analogies from daily life.", "Focus on the problem solved, not the technology."],
    keyPoints: ["Start with the problem", "Explain the solution simply", "Mention the impact/benefit", "Keep it under 1 minute"],
    sampleAnswer: "Imagine you're a college administrator and every semester, some students fail unexpectedly. My project is like an early warning system — it analyzes past student data (attendance, grades, participation) and predicts which students might struggle. This way, the college can provide extra support before it's too late. Think of it like a weather forecast, but for academic performance.",
    answers: [{ id: "pd-1-a1", author: "Communication Pro", timeAgo: "4 days ago", text: "The 'Grandma Test': If your grandma can't understand your project explanation, it's too technical.\n\nUse phrases like:\n- 'Think of it like...'\n- 'Just like how [everyday thing] works...'\n- 'The problem is similar to...'\n\nHR may not be technical. Make them FEEL the value of your project.", likes: 134, replies: 15 }]
  },
  {
    id: "pd-2", type: "hr-theory",
    question: "What was the biggest challenge you faced during your project?",
    tips: ["Pick a genuine technical or team challenge.", "Explain how YOU solved it.", "Show problem-solving through the story."],
    keyPoints: ["Describe the challenge specifically", "Explain your approach to solving it", "Mention resources you used", "Share the outcome"],
    sampleAnswer: "The biggest challenge was data quality. Our student dataset had 30% missing values and inconsistent formats. I spent two weeks researching data imputation techniques, tried mean imputation, KNN imputation, and finally used MICE (Multiple Imputation by Chained Equations) which gave the best results. This improved our model accuracy from 72% to 89%.",
    answers: [{ id: "pd-2-a1", author: "Project Veteran", timeAgo: "1 week ago", text: "Good challenges to mention:\n\n- Technical: Bug fixing, integration issues, performance optimization\n- Team: Coordination problems, different skill levels\n- Timeline: Deadline pressure, scope changes\n- Learning: Using a new technology under pressure\n\nDon't say 'nothing was challenging.' It suggests you didn't push boundaries.", likes: 112, replies: 13 }]
  },
  {
    id: "pd-3", type: "hr-theory",
    question: "If you had to redo your project, what would you change?",
    tips: ["Show growth mindset and technical maturity.", "Mention specific improvements.", "Don't badmouth your own project completely."],
    keyPoints: ["Acknowledge what went well first", "Mention specific technical improvements", "Discuss architectural changes", "Show you've learned from the experience"],
    sampleAnswer: "The project achieved its goals, but if I were to redo it, I would make three changes: 1) I'd use a microservices architecture instead of monolithic — it would make the system more scalable. 2) I'd implement CI/CD from the start for automated testing. 3) I'd use Docker for consistent deployment across environments. These improvements would make the project more industry-ready.",
    answers: [{ id: "pd-3-a1", author: "Hindsight 2020", timeAgo: "5 days ago", text: "Smart improvements to mention:\n\n- Better architecture (monolith → microservices)\n- Better testing (manual → automated)\n- Better deployment (manual → CI/CD)\n- Better code quality (no linting → ESLint/SonarQube)\n- Better scalability considerations\n\nThis shows you understand industry standards beyond college project requirements.", likes: 98, replies: 11 }]
  },
  {
    id: "pd-4", type: "hr-theory",
    question: "How did you divide work in your team project?",
    tips: ["Show leadership and organizational skills.", "Mention how you leveraged individual strengths.", "Discuss coordination tools you used."],
    keyPoints: ["How tasks were divided", "How you tracked progress", "How you handled dependencies", "How you ensured quality"],
    sampleAnswer: "We had a team of 4. I analyzed each member's strengths: one was strong in frontend, another in databases, the third in testing, and I handled backend and integration. We used a shared Trello board for task tracking and had weekly sync calls. When modules needed to integrate, I coordinated between members and resolved conflicts. This approach ensured everyone contributed their best while maintaining project cohesion.",
    answers: [{ id: "pd-4-a1", author: "Team Lead", timeAgo: "2 weeks ago", text: "What HR is really checking:\n\n1. Can you organize and delegate?\n2. Do you leverage team strengths?\n3. How do you handle slackers?\n4. Do you use project management tools?\n5. How do you ensure accountability?\n\nEven if your project division was informal, present it as structured. Shows professionalism.", likes: 87, replies: 9 }]
  },
  {
    id: "pd-5", type: "hr-theory",
    question: "What real-world problem does your project solve?",
    tips: ["Connect your project to a real need.", "Quantify the impact if possible.", "Show you didn't build it just for grades."],
    keyPoints: ["Identify the problem clearly", "Who benefits from the solution", "What's the measurable impact", "Could it be scaled for real use?"],
    sampleAnswer: "Our college has 3,000+ students and tracking each student's academic health manually is impossible. Our system automates this by analyzing academic data and flagging at-risk students early. If implemented, it could reduce the dropout rate by an estimated 25%. The academic council showed interest in actually deploying it for the next academic year.",
    answers: [{ id: "pd-5-a1", author: "Impact Driven", timeAgo: "3 days ago", text: "Convincing real-world connections:\n\n- Online shop project → 'Solves inventory management for local businesses'\n- Chat app → 'Provides secure communication for college communities'\n- Attendance system → 'Eliminates proxy attendance, saving 200+ hours/semester'\n- Weather app → 'Helps farmers plan irrigation in rural areas'\n\nAlways frame your project as SOLVING A PROBLEM, not just being a class assignment.", likes: 123, replies: 14 }]
  },
  {
    id: "pd-6", type: "hr-theory",
    question: "Did you use any software development methodology in your project?",
    tips: ["Mention Agile, Scrum, or Waterfall.", "Even informal processes count.", "Show understanding of development lifecycles."],
    keyPoints: ["Name the methodology used", "How you implemented it", "Why it was suitable for your project", "What you'd change about your process"],
    sampleAnswer: "We followed an Agile approach with 2-week sprints. At the start, we created user stories and prioritized them as a team. Each sprint had a clear goal, and we held brief daily standups (even informally over WhatsApp). At the end of each sprint, we reviewed what was done and what needed improvement. This iterative approach helped us adapt when requirements changed midway.",
    answers: [{ id: "pd-6-a1", author: "Agile Coach", timeAgo: "1 week ago", text: "Even if your project was informal, you can frame it using Agile terms:\n\nInformal meetings → 'Daily standups'\nWeekly progress checks → 'Sprint reviews'\nTask lists on paper → 'Product backlog'\nChanging plans → 'Iterative development'\n\nHR loves hearing Agile terminology used correctly. It shows industry awareness.", likes: 108, replies: 12 }]
  }
];
