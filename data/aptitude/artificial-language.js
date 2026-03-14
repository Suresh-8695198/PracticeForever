export const theory = [
  {
    "title": "Artificial Language Decoding",
    "description": "Artificial language questions present a set of invented words and their English translations. Your task is to compare these pairs to isolate the meaning of individual segments (roots, prefixes, suffixes) and then construct or translate a new word using that logic.",
    "image": "/images/aptitude/artificial-language-logic.svg",
    "formulas": [
      { "label": "Step 1", "value": "Observe common segments in the artificial words." },
      { "label": "Step 2", "value": "Identify the corresponding common words in the English translations." },
      { "label": "Step 3", "value": "Match unique segments with unique English words to build a full vocabulary." },
      { "label": "Step 4", "value": "Assemble the target word based on the patterns identified (Mind the word order!)." }
    ]
  }
];

export const questions = [
  {
    "id": 1,
    "text": "Here are some of the words translated from an artificial language:\n• creektulo means treeplantation\n• creekfuos means treemutation\n• fuosseed means mutationsapling\n\nWhich word means 'sapling'?",
    "options": [
      { "id": "A", "text": "Creek" },
      { "id": "B", "text": "Tulo" },
      { "id": "C", "text": "Fuos" },
      { "id": "D", "text": "Seed" }
    ],
    "answer": "D",
    "explanation": "Comparing the first two words: 'creek' appears in both, as does 'tree'. So, creek = tree.\nComparing the second and third words: 'fuos' appears in both, as does 'mutation'. So, fuos = mutation.\nIn the third word 'fuosseed' (mutationsapling), we know 'fuos' is mutation, which leaves 'seed' to mean 'sapling'."
  },
  {
    "id": 2,
    "text": "Here are some words translated from an artificial language:\n• jalkamofti means happy birthday\n• moftihoze means birthday party\n• mentogunn means goodness\n\nWhich word could mean 'happiness'?",
    "options": [
      { "id": "A", "text": "jalkagunn" },
      { "id": "B", "text": "mentohoze" },
      { "id": "C", "text": "moftihoze" },
      { "id": "D", "text": "hozemento" }
    ],
    "answer": "A",
    "explanation": "From the first two:\n'mofti' = birthday\n'jalka' = happy\n'hoze' = party\nFrom the third word 'mentogunn' (goodness):\n'mento' = good\n'gunn' = ness (the suffix)\nTo get 'happiness' (happy + ness), we combine 'jalka' (happy) and 'gunn' (ness). Result: jalkagunn."
  },
  {
    "id": 3,
    "text": "Here are some of the words translated from an artificial language:\n• robbhood means nextgeneration\n• hoodgough means generationproud\n• goughspur means proudnation\n\nWhich word means 'generation'?",
    "options": [
      { "id": "A", "text": "robb" },
      { "id": "B", "text": "hood" },
      { "id": "C", "text": "gough" },
      { "id": "D", "text": "spur" }
    ],
    "answer": "B",
    "explanation": "Comparing 'robbhood' (nextgeneration) and 'hoodgough' (generationproud), the common element is 'hood' in the artificial language and 'generation' in English. Therefore, hood = generation."
  },
  {
    "id": 4,
    "text": "Here are some words translated from an artificial language:\n• lelibroon means yellowhat\n• plekafroti means flowergarden\n• frotimix means gardensalad\n\nWhich word could mean 'yellowflower'?",
    "options": [
      { "id": "A", "text": "lelifroti" },
      { "id": "B", "text": "lelipleka" },
      { "id": "C", "text": "plekabroon" },
      { "id": "D", "text": "frotibroon" }
    ],
    "answer": "B",
    "explanation": "From the first word: 'leli' = yellow.\nFrom the second word 'plekafroti' (flowergarden) and third word 'frotimix' (gardensalad), 'froti' = garden.\nThis means 'pleka' = flower.\nTo get 'yellowflower', we combine 'leli' (yellow) and 'pleka' (flower). Result: lelipleka."
  },
  {
    "id": 5,
    "text": "Here are some words translated from an artificial language:\n• granamelke means big tree\n• pinimelke means little tree\n• melkehoon means tree house\n\nWhich word could mean 'big house'?",
    "options": [
      { "id": "A", "text": "granahoon" },
      { "id": "B", "text": "pinishur" },
      { "id": "C", "text": "pinihoon" },
      { "id": "D", "text": "melkegrana" }
    ],
    "answer": "A",
    "explanation": "From comparison:\n'melke' = tree\n'grana' = big\n'pini' = little\n'hoon' = house\nTherefore, 'big house' would be granahoon."
  },
  {
    "id": 6,
    "text": "Here are some words translated from an artificial language:\n• malgauper means peach cobbler\n• malgaport means peach juice\n• moggagrop means apple jelly\n\nWhich word could mean 'apple juice'?",
    "options": [
      { "id": "A", "text": "malgaauper" },
      { "id": "B", "text": "moggaport" },
      { "id": "C", "text": "gropport" },
      { "id": "D", "text": "moggagrop" }
    ],
    "answer": "B",
    "explanation": "From comparison:\n'malga' = peach\n'uper' = cobbler\n'port' = juice\n'mogga' = apple\n'grop' = jelly\nTo get 'apple juice', we combine 'mogga' (apple) and 'port' (juice). Result: moggaport."
  }
];
