export const questions = [
  {
    id: 1,
    type: 'passage-group',
    passage: "Climate change is one of the most pressing issues of our time. The Earth's average temperature has risen by about 1.1 degrees Celsius since the late 19th century, a change driven largely by increased carbon dioxide and other human-made emissions into the atmosphere. Most of the warming occurred in the past 40 years, with the seven most recent years being the warmest. The impacts of global warming are already being felt around the world, from more frequent and intense heatwaves and droughts to more severe storms and rising sea levels. To avoid the most catastrophic effects of climate change, the world must transition to a low-carbon economy and significantly reduce its greenhouse gas emissions.",
    subQuestions: [
      {
        id: "1a",
        text: "What is the primary cause of the rise in Earth's average temperature mentioned in the passage?",
        options: [
          { id: "A", text: "Natural cycles of the Earth" },
          { id: "B", text: "Increased solar activity" },
          { id: "C", text: "Decreased volcanic eruptions" },
          { id: "D", text: "Increased human-made emissions" }
        ],
        answer: "D",
        explanation: "The passage specifically mentions that the change is 'driven largely by increased carbon dioxide and other human-made emissions into the atmosphere'."
      },
      {
        id: "1b",
        text: "According to the passage, when did most of the global warming occur?",
        options: [
          { id: "A", text: "In the late 19th century" },
          { id: "B", text: "In the past 40 years" },
          { id: "C", text: "Over the last 100 years" },
          { id: "D", text: "In the past decade only" }
        ],
        answer: "B",
        explanation: "The passage states, 'Most of the warming occurred in the past 40 years'."
      }
    ]
  },
  {
    id: 2,
    type: 'passage-group',
    passage: "Artificial Intelligence (AI) is transforming the way we live and work. From virtual assistants like Siri and Alexa to autonomous vehicles and advanced medical diagnostics, AI is becoming deeply integrated into society. While the potential benefits of AI are immense, including increased efficiency and improved decision-making, it also raises significant ethical concerns. These include the potential for bias in algorithms, the impact on job displacement, and the need for robust data privacy protections. As AI technology continues to evolve rapidly, it is crucial to develop ethical frameworks and regulations to ensure that it is developed and used responsibly.",
    subQuestions: [
      {
        id: "2a",
        text: "Which of the following is NOT mentioned as a benefit of AI in the passage?",
        options: [
          { id: "A", text: "Increased efficiency" },
          { id: "B", text: "Improved decision-making" },
          { id: "C", text: "Emotional intelligence in machines" },
          { id: "D", text: "Advanced medical diagnostics" }
        ],
        answer: "C",
        explanation: "The passage mentions efficiency, decision-making, and diagnostics, but does not claim AI provides emotional intelligence."
      },
      {
        id: "2b",
        text: "What is emphasized as 'crucial' for the future development of AI?",
        options: [
          { id: "A", text: "Increasing processing power" },
          { id: "B", text: "Developing ethical frameworks" },
          { id: "C", text: "Replacing all human jobs" },
          { id: "D", text: "Reducing data privacy" }
        ],
        answer: "B",
        explanation: "The final sentence states it is 'crucial to develop ethical frameworks and regulations'."
      }
    ]
  }
];
