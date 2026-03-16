export const hrTopicMeta = {
  title: "Resume Deep Dive",
  description: "Prepare for detailed questions about everything on your resume — projects, skills, and gaps.",
  totalQuestions: 8,
  difficulty: "Advanced",
  estimatedTime: "20 mins"
};

export const questions = [
  {
    id: "rdd-1", type: "hr-theory",
    question: "Walk me through your resume.",
    tips: ["Don't read your resume word by word.", "Highlight key achievements and skills.", "Keep it structured and under 2 minutes."],
    keyPoints: ["Start with current status", "Mention education briefly", "Focus on projects and skills", "Highlight achievements", "End with career goals"],
    sampleAnswer: "I'll walk you through the highlights. I'm a B.Tech CSE graduate from [College] with 8.2 CGPA. My key project was a [Project Name] where I used Java and MySQL to build [description]. I interned at [Company] working on [tasks]. My core skills are Java, Python, SQL, and web development. I've also earned certifications in [X]. I'm looking for a role where I can apply these skills and grow.",
    answers: [{ id: "rdd-1-a1", author: "Resume Expert", timeAgo: "5 days ago", text: "Golden rule: Your resume walkthrough should be a STORY, not a list.\n\nBad: 'I studied at X, then did Y, then Z...'\nGood: 'My journey started with a passion for coding in school. This led me to pursue CS in college, where I built [project] and discovered my love for [domain].'\n\nMake it engaging!", likes: 145, replies: 18 }]
  },
  {
    id: "rdd-2", type: "hr-theory",
    question: "Tell me about your final year project.",
    tips: ["Know every technical detail of your project.", "Be prepared for deep technical questions.", "Explain the problem it solves, not just what it does."],
    keyPoints: ["Problem statement — why was this project needed?", "Technologies used and why you chose them", "Your specific role in the project", "Challenges faced and how you overcame them", "Results/impact of the project"],
    sampleAnswer: "My final year project was a 'Student Performance Prediction System' using Machine Learning. The problem: Our college had a 15% dropout rate and early identification could help. I used Python with scikit-learn to build a Random Forest classifier trained on 5 years of student data. My specific contributions were data preprocessing, feature engineering, and model optimization. We achieved 89% accuracy in predicting at-risk students. This project taught me the full ML pipeline from data collection to deployment.",
    answers: [{ id: "rdd-2-a1", author: "Project Tips", timeAgo: "1 week ago", text: "Questions HR WILL ask about your project:\n\n1. Why this project? (Motivation)\n2. What technology did you use and why?\n3. What was YOUR role specifically?\n4. What challenges did you face?\n5. What would you improve if you did it again?\n6. Can you explain [technical term] you mentioned?\n\nPrepare answers for ALL of these!", likes: 167, replies: 21 }]
  },
  {
    id: "rdd-3", type: "hr-theory",
    question: "Why did you choose this particular technology stack for your project?",
    tips: ["Show you made deliberate decisions, not random choices.", "Compare with alternatives briefly.", "Mention trade-offs you considered."],
    keyPoints: ["Show decision-making ability", "Mention alternatives you considered", "Explain why this stack was the best fit", "Discuss any trade-offs"],
    sampleAnswer: "I chose Python with Flask for the backend because Python has the best ML libraries (scikit-learn, pandas), and Flask is lightweight for our API needs. For the frontend, I used React for its component-based architecture. For the database, I chose MySQL because our data was structured and relational. I considered MongoDB but relational data suited our use case better. This stack also had the best documentation and community support for a college project timeline.",
    answers: [{ id: "rdd-3-a1", author: "Tech Choices", timeAgo: "3 days ago", text: "When explaining tech choices, use this format:\n\n'I chose [X] because [reason], over [Y] which I considered because [comparison].'\n\nExample: 'I chose MySQL over MongoDB because our data was highly relational and we needed ACID compliance for student records.'\n\nThis shows analytical thinking!", likes: 89, replies: 10 }]
  },
  {
    id: "rdd-4", type: "hr-theory",
    question: "I see a gap in your resume. Can you explain?",
    tips: ["Be honest about gaps.", "Show productive use of gap time if possible.", "Don't be defensive."],
    keyPoints: ["Be honest and straightforward", "Mention what you did during the gap", "Show how it made you better", "Don't apologize excessively"],
    sampleAnswer: "Yes, I took a gap year after graduation to prepare for GATE. While I didn't achieve the rank I wanted, the preparation significantly strengthened my Computer Science fundamentals, especially in Data Structures, Algorithms, and OS. I also used that time to complete online certifications in Java and Cloud Computing. This experience taught me discipline and resilience, and I'm now more focused and determined in my career path.",
    answers: [{ id: "rdd-4-a1", author: "Gap Year Experience", timeAgo: "2 weeks ago", text: "Common legitimate gaps and how to frame them:\n\n1. GATE/CAT prep → 'Strengthened my fundamentals'\n2. Health issues → 'Taught me resilience and priorities'\n3. Family responsibilities → 'Developed maturity and time management'\n4. Freelancing → 'Gained real-world project experience'\n5. Upskilling → 'Invested in certifications and learning'\n\nNever lie about gaps. HR can verify.", likes: 156, replies: 19 }]
  },
  {
    id: "rdd-5", type: "hr-theory",
    question: "What skills on your resume are you most confident about?",
    tips: ["Pick skills you can be tested on.", "Don't claim expertise you don't have.", "Give specific examples of using those skills."],
    keyPoints: ["Be genuine — don't overclaim", "Choose skills relevant to the role", "Have examples ready for each", "Be prepared for follow-up technical questions"],
    sampleAnswer: "I'm most confident in Java and SQL. I've solved 150+ Java problems on coding platforms and built two complete projects using Java. For SQL, I can write complex queries including joins, subqueries, and window functions. I've used SQL extensively in my project for data analysis. I'm also confident in my problem-solving ability — I consistently performed well in coding contests during college.",
    answers: [{ id: "rdd-5-a1", author: "Skills Audit", timeAgo: "6 days ago", text: "Rate your skills honestly before the interview:\n\n5/5: You can solve problems and answer deep questions\n4/5: You're comfortable and can handle most questions\n3/5: You know the basics well\n2/5: You've used it but aren't confident\n1/5: You've only heard of it\n\nOnly claim 4/5 or 5/5 skills in the interview. If HR asks about a 2/5 skill, say 'I have basic knowledge and I'm actively improving.'", likes: 112, replies: 14 }]
  },
  {
    id: "rdd-6", type: "hr-theory",
    question: "Tell me about your internship experience.",
    tips: ["Focus on what you LEARNED and CONTRIBUTED.", "Mention specific tasks and technologies.", "Share feedback you received."],
    keyPoints: ["Company name, duration, and role", "Specific tasks and responsibilities", "Technologies and tools used", "Key learnings and achievements", "Any feedback or recognition"],
    sampleAnswer: "I interned at [Company] for 3 months as a Software Development Intern. My main task was building REST APIs for their customer portal using Spring Boot. I developed 5 APIs for user authentication and data retrieval, wrote unit tests with JUnit, and participated in code reviews. My mentor appreciated my code quality and I received a pre-placement offer. The internship taught me how corporate development cycles work, including Agile practices and version control with Git.",
    answers: [{ id: "rdd-6-a1", author: "Intern to Full-time", timeAgo: "1 week ago", text: "If you DON'T have internship experience, say:\n\n'While I didn't do a formal internship, I compensated by:\n- Building 3 personal projects\n- Contributing to open-source on GitHub\n- Completing industry-level certifications\n- Freelancing for small businesses'\n\nLack of internship is NOT a disqualifier. Show what you did instead!", likes: 134, replies: 16 }]
  },
  {
    id: "rdd-7", type: "hr-theory",
    question: "What certifications do you have and how have they helped you?",
    tips: ["Only mention genuine certifications.", "Explain practical value, not just the certificate.", "Mention what you learned, not just the platform."],
    keyPoints: ["Mention platform and certification name", "What skills you gained", "How you've applied those skills", "Relevance to the role"],
    sampleAnswer: "I have three certifications: 1) AWS Cloud Practitioner from Amazon — this gave me understanding of cloud architecture and services. 2) Java Programming from TCS iON — this deepened my OOP concepts. 3) SQL Advanced from HackerRank — this validated my database querying skills. These certifications have directly helped me in my projects and given me confidence in these technology areas.",
    answers: [{ id: "rdd-7-a1", author: "Cert Guide", timeAgo: "4 days ago", text: "Certifications that impress in IT interviews:\n\nHigh Impact: AWS/Azure cloud certs, TCS iON certs, Google Digital\nMedium Impact: Coursera/Udemy specializations, HackerRank badges\nLow Impact: Random YouTube course completions\n\nTip: Quality over quantity. 2-3 meaningful certs > 10 random ones.\n\nAlso: If a cert is on your resume, be ready for questions about it!", likes: 98, replies: 11 }]
  },
  {
    id: "rdd-8", type: "hr-theory",
    question: "What would you change about your resume if you could go back in time?",
    tips: ["Show self-awareness and growth mindset.", "Mention constructive changes, not regrets.", "This shows maturity."],
    keyPoints: ["Show reflection and self-awareness", "Frame it as learning, not regret", "Mention specific improvements", "Connect to how you'd do things differently"],
    sampleAnswer: "Looking back, I wish I had started competitive programming earlier in college. While I focused on academics and got good grades, having a stronger DSA foundation would have made me a more well-rounded candidate. I also wish I had contributed to open-source projects, as that experience is highly valued in the industry. These reflections have motivated me to continue investing in these areas now.",
    answers: [{ id: "rdd-8-a1", author: "Career Mentor", timeAgo: "2 weeks ago", text: "Great self-aware answers:\n\n1. 'I'd start coding earlier' — shows passion\n2. 'I'd do more internships' — shows practical orientation\n3. 'I'd learn DSA from day one' — shows tech awareness\n4. 'I'd build more projects' — shows initiative\n\nAvoid: 'I'd choose a different branch' or 'I wouldn't go to this college' — sounds like you're unhappy with your choices.", likes: 76, replies: 8 }]
  }
];
