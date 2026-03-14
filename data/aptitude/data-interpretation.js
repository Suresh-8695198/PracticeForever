import { questions as tabQ } from './tabulation';
import { questions as barQ } from './bar-graphs';
import { questions as pieQ } from './pie-charts';
import { questions as lineQ } from './line-graphs';

export const theory = [
  {
    "title": "Mastering Data Interpretation",
    "description": "Data Interpretation (DI) is the process of making sense of numerical data that has been collected, analyzed, and presented. It involves reading charts, tables, and graphs to draw meaningful conclusions.",
    "image": `
<svg width="400" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" rx="20" fill="#f5f3ff"/>
  <rect x="50" y="80" width="100" height="100" rx="10" fill="#ddd6fe"/>
  <circle cx="250" cy="130" r="50" fill="#8b5cf6" opacity="0.3"/>
  <rect x="300" y="80" width="40" height="100" rx="5" fill="#7c3aed"/>
  <text x="200" y="40" text-anchor="middle" font-family="Outfit" font-weight="900" font-size="16" fill="#4c1d95">DI MASTERCLASS</text>
</svg>
    `,
    "formulas": [
      { "label": "Comparison", "value": "A is what % of B? (A/B) × 100" },
      { "label": "Growth", "value": "% Increase/Decrease over years." },
      { "label": "Aggregation", "value": "Sum and Averages of data points." }
    ]
  }
];

// Mix some questions from each category
export const questions = [
  ...tabQ.slice(0, 2),
  ...barQ.slice(0, 2),
  ...pieQ.slice(0, 2),
  ...lineQ.slice(0, 2),
  // Add some unique mixed ones here if needed
];
