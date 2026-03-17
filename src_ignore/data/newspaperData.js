export const newspaperConfig = {
  dailySource: {
    id: 1,
    name: "The Hindu",
    url: "https://www.thehindu.com/",
    pointsPerRead: 50,
    icon: "📰"
  }
};

export const badges = [
  {
    id: 1,
    name: "First Step",
    description: "Read your first article",
    requirement: 1,
    type: "articles",
    tier: 1,
    image: "🎯"
  },
  {
    id: 2,
    name: "Getting Started",
    description: "Read 3 articles",
    requirement: 3,
    type: "articles",
    tier: 1,
    image: "📖"
  },
  {
    id: 3,
    name: "Dedicated Reader",
    description: "Read 7 articles",
    requirement: 7,
    type: "articles",
    tier: 2,
    image: "📚"
  },
  {
    id: 4,
    name: "News Enthusiast",
    description: "Read 15 articles",
    requirement: 15,
    type: "articles",
    tier: 2,
    image: "�️"
  },
  {
    id: 5,
    name: "Knowledge Seeker",
    description: "Read 30 articles",
    requirement: 30,
    type: "articles",
    tier: 3,
    image: "🎓"
  },
  {
    id: 6,
    name: "News Master",
    description: "Read 50 articles",
    requirement: 50,
    type: "articles",
    tier: 3,
    image: "👑"
  },
  {
    id: 7,
    name: "3 Day Streak",
    description: "Read for 3 consecutive days",
    requirement: 3,
    type: "streak",
    tier: 1,
    image: "🔥"
  },
  {
    id: 8,
    name: "Week Warrior",
    description: "Read for 7 consecutive days",
    requirement: 7,
    type: "streak",
    tier: 2,
    image: "⚡"
  },
  {
    id: 9,
    name: "Month Master",
    description: "Read for 30 consecutive days",
    requirement: 30,
    type: "streak",
    tier: 3,
    image: "💎"
  },
  {
    id: 10,
    name: "Century Club",
    description: "Read 100 articles",
    requirement: 100,
    type: "articles",
    tier: 4,
    image: "🏆"
  },
  {
    id: 11,
    name: "Legendary",
    description: "Read for 100 consecutive days",
    requirement: 100,
    type: "streak",
    tier: 4,
    image: "⭐"
  },
  {
    id: 12,
    name: "Point Master",
    description: "Earn 5000 points",
    requirement: 5000,
    type: "points",
    tier: 4,
    image: "💰"
  }
];

export const tierConfig = {
  1: {
    name: "Bronze",
    color: "from-amber-700 to-amber-900",
    borderColor: "border-amber-600",
    glowColor: "shadow-amber-500/50"
  },
  2: {
    name: "Silver",
    color: "from-gray-400 to-gray-600",
    borderColor: "border-gray-400",
    glowColor: "shadow-gray-400/50"
  },
  3: {
    name: "Gold",
    color: "from-yellow-400 to-yellow-600",
    borderColor: "border-yellow-400",
    glowColor: "shadow-yellow-400/50"
  },
  4: {
    name: "Diamond",
    color: "from-cyan-400 to-blue-600",
    borderColor: "border-cyan-400",
    glowColor: "shadow-cyan-400/50"
  }
};

export const levelConfig = [
  { level: 1, pointsRequired: 0, title: "Beginner" },
  { level: 2, pointsRequired: 250, title: "Reader" },
  { level: 3, pointsRequired: 500, title: "Enthusiast" },
  { level: 4, pointsRequired: 1000, title: "Scholar" },
  { level: 5, pointsRequired: 2000, title: "Expert" },
  { level: 6, pointsRequired: 3500, title: "Master" },
  { level: 7, pointsRequired: 5000, title: "Legend" },
  { level: 8, pointsRequired: 7500, title: "Champion" },
  { level: 9, pointsRequired: 10000, title: "Elite" },
  { level: 10, pointsRequired: 15000, title: "Grandmaster" }
];
