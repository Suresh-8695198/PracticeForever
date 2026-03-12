export const questions = [
  {
    "id": 1,
    "text": "What is the angle between the hour hand and the minute hand at 5:10 AM?",
    "options": [
      { "id": "a", "text": "355°" },
      { "id": "b", "text": "105°" },
      { "id": "c", "text": "195°" },
      { "id": "d", "text": "95°" }
    ],
    "answer": "d",
    "explanation": "Formula: Angle = |(60H - 11M)/2|\nAngle = |(60*5 - 11*10)/2| = |(300 - 110)/2| = 190/2 = 95°."
  },
  {
    "id": 2,
    "text": "What is the angle between the hour hand and the minute hand at 6:30 PM?",
    "options": [
      { "id": "a", "text": "15°" },
      { "id": "b", "text": "330°" },
      { "id": "c", "text": "345°" },
      { "id": "d", "text": "315°" }
    ],
    "answer": "c",
    "explanation": "Angle = |(60*6 - 11*30)/2| = |(360 - 330)/2| = 15°.\nThe reflex angle is 360 - 15 = 345°."
  },
  {
    "id": 3,
    "text": "What is the angle between the hour hand and the minute hand at 3:30 AM?",
    "options": [
      { "id": "a", "text": "105°" },
      { "id": "b", "text": "75°" },
      { "id": "c", "text": "65°" },
      { "id": "d", "text": "55°" }
    ],
    "answer": "b",
    "explanation": "Angle = |(60*3 - 11*30)/2| = |(180 - 330)/2| = |-150/2| = 75°."
  },
  {
    "id": 4,
    "text": "What is the angle between the hour hand and the minute hand at 9:00 AM?",
    "options": [
      { "id": "a", "text": "180°" },
      { "id": "b", "text": "120°" },
      { "id": "c", "text": "60°" },
      { "id": "d", "text": "90°" }
    ],
    "answer": "d",
    "explanation": "At 9:00, the hour hand is at 9 and minute hand at 12. Angle = 3 divisions * 30° per division = 90°."
  },
  {
    "id": 5,
    "text": "What was the day of the week on 9th November 1998?",
    "options": [
      { "id": "a", "text": "Tuesday" },
      { "id": "b", "text": "Sunday" },
      { "id": "c", "text": "Monday" },
      { "id": "d", "text": "Wednesday" }
    ],
    "answer": "c",
    "explanation": "9th Nov 1998:\nYear: 98, Leap years: 24, Month code: 4, Date: 9.\nTotal = 98 + 24 + 4 + 9 = 135.\n135 / 7 leaves remainder 2.\nIn the 1900s, remainder 2 corresponds to Monday (1-Sun, 2-Mon...)."
  },
  {
    "id": 6,
    "text": "What was the day of the week on 2nd July 2003?",
    "options": [
      { "id": "a", "text": "Tuesday" },
      { "id": "b", "text": "Sunday" },
      { "id": "c", "text": "Monday" },
      { "id": "d", "text": "Wednesday" }
    ],
    "answer": "d",
    "explanation": "2nd July 2003:\nYear: 03, Leap years: 0, Month code: 0, Date: 2.\nTotal = 3 + 0 + 0 + 2 = 5.\nIn the 2000s, subtract 1 from remainder: 5 - 1 = 4.\nRemainder 4 corresponds to Wednesday."
  },
  {
    "id": 7,
    "text": "Which of the following is NOT a leap year?",
    "options": [
      { "id": "a", "text": "1200" },
      { "id": "b", "text": "600" },
      { "id": "c", "text": "1600" },
      { "id": "d", "text": "2400" }
    ],
    "answer": "b",
    "explanation": "A century year must be divisible by 400 to be a leap year. 600 is not divisible by 400."
  },
  {
    "id": 8,
    "text": "How many days are there in 'y' weeks and 'y' days?",
    "options": [
      { "id": "a", "text": "7y2" },
      { "id": "b", "text": "8y" },
      { "id": "c", "text": "8y2" },
      { "id": "d", "text": "7y" }
    ],
    "answer": "b",
    "explanation": "1 week = 7 days. So, y weeks = 7y days.\nTotal days = 7y + y = 8y."
  },
  {
    "id": 9,
    "text": "It was Friday on February 1, 2013. What was the day of the week on February 1, 2018?",
    "options": [
      { "id": "a", "text": "Friday" },
      { "id": "b", "text": "Wednesday" },
      { "id": "c", "text": "Thursday" },
      { "id": "d", "text": "Saturday" }
    ],
    "answer": "c",
    "explanation": "Odd days from Feb 1, 2013 to Feb 1, 2018:\n2013 (1), 2014 (1), 2015 (1), 2016 (2), 2017 (1).\nTotal odd days = 1+1+1+2+1 = 6 days.\nFriday + 6 days = Thursday."
  },
  {
    "id": 10,
    "text": "The last day of a century cannot be which of these?",
    "options": [
      { "id": "a", "text": "Saturday" },
      { "id": "b", "text": "Friday" },
      { "id": "c", "text": "Monday" },
      { "id": "d", "text": "Wednesday" }
    ],
    "answer": "a",
    "explanation": "Last days of a century can only be Monday, Wednesday, Friday, or Sunday. They cannot be Tuesday, Thursday, or Saturday."
  },
  {
    "id": 11,
    "text": "The year next to 2014 will have the same calendar as the year:",
    "options": [
      { "id": "a", "text": "2017" },
      { "id": "b", "text": "2025" },
      { "id": "c", "text": "2052" },
      { "id": "d", "text": "2071" }
    ],
    "answer": "b",
    "explanation": "2014 is the 2nd year after a leap year (2012). For such years, the calendar repeats after 11 years.\n2014 + 11 = 2025."
  },
  {
    "id": 12,
    "text": "How many times in a day do the hands of a clock coincide with each other?",
    "options": [
      { "id": "a", "text": "11" },
      { "id": "b", "text": "48" },
      { "id": "c", "text": "22" },
      { "id": "d", "text": "24" }
    ],
    "answer": "c",
    "explanation": "The hands coincide once every hour except between 11 and 1 (they coincide only at 12). This happens 11 times in 12 hours, so 22 times in 24 hours."
  },
  {
    "id": 13,
    "text": "If a mirror shows 1:13 in a clock, what is the actual time?",
    "options": [
      { "id": "a", "text": "10:43" },
      { "id": "b", "text": "10:57" },
      { "id": "c", "text": "10:53" },
      { "id": "d", "text": "10:47" }
    ],
    "answer": "d",
    "explanation": "For mirror images, subtract the time from 11:60.\n11:60 - 1:13 = 10:47."
  },
  {
    "id": 14,
    "text": "If Friday was the first day of an ordinary year, what would be the last day of the year?",
    "options": [
      { "id": "a", "text": "Thursday" },
      { "id": "b", "text": "Monday" },
      { "id": "c", "text": "Wednesday" },
      { "id": "d", "text": "Friday" }
    ],
    "answer": "d",
    "explanation": "In an ordinary year, the first and last days are always the same because there are 52 weeks and 1 odd day."
  },
  {
    "id": 15,
    "text": "At what time are the hands of a clock together between 2 and 3?",
    "options": [
      { "id": "a", "text": "2:10 10/11" },
      { "id": "b", "text": "3:10 10/11" },
      { "id": "c", "text": "2:11 10/11" },
      { "id": "d", "text": "3:11 10/11" }
    ],
    "answer": "a",
    "explanation": "Formula: Time = (Smaller Hour) : 2/11 * (Hour * 30).\nTime = 2 : 2/11 * (2 * 30) = 2 : 120/11 = 2 : 10 10/11 minutes."
  },
  {
    "id": 16,
    "text": "A clock lags 5 minutes on Sunday 8 AM and is ahead 7 minutes on Tuesday 8 AM. When did it show the right time?",
    "options": [
      { "id": "a", "text": "Saturday 4 PM" },
      { "id": "b", "text": "Saturday 4 AM" },
      { "id": "c", "text": "Monday 4 PM" },
      { "id": "d", "text": "Monday 4 AM" }
    ],
    "answer": "d",
    "explanation": "Total gain = 5 + 7 = 12 minutes. Total time = 48 hours.\nTime to gain 5 mins (to reach correct time) = (5/12) * 48 = 20 hours.\nSunday 8 AM + 20 hours = Monday 4 AM."
  },
  {
    "id": 17,
    "text": "The time shown in a clock is 3:13. What time will appear in the water image?",
    "options": [
      { "id": "a", "text": "1:47" },
      { "id": "b", "text": "2:17" },
      { "id": "c", "text": "2:13" },
      { "id": "d", "text": "3:17" }
    ],
    "answer": "b",
    "explanation": "For water images, if minutes < 30, subtract from 5:30 or 17:30.\n5:30 - 3:13 = 2:17."
  }
];
