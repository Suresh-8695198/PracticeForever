import re
import json

def parse_questions(text):
    # Split text into questions and solutions
    parts = text.split("Solutions:")
    questions_text = parts[0]
    solutions_text = parts[1]

    # Parse questions
    question_pattern = re.compile(r'(\d+)\)\s+(.*?)\s+(?:[a-e]\)\s+.*?\s+)+', re.DOTALL)
    option_pattern = re.compile(r'([a-e])\)\s+(.*?)(?=\s+[a-e]\)|$)', re.DOTALL)

    questions = []
    
    # Simple split might be easier if regex fails
    q_matches = re.finditer(r'(\d+)\)\s+(.*?)(?=\n\d+\)|$)', questions_text, re.DOTALL)
    
    for match in q_matches:
        q_id = int(match.group(1))
        content = match.group(2).strip()
        
        # Split content into question text and options
        # Options start with a)
        opt_start = content.find('a)')
        q_text = content[:opt_start].strip()
        opt_text = content[opt_start:].strip()
        
        options = []
        for opt_match in option_pattern.finditer(opt_text):
            options.append({
                'id': opt_match.group(1).upper(),
                'text': opt_match.group(2).strip()
            })
        
        questions.append({
            'id': q_id,
            'text': q_text,
            'options': options
        })

    # Parse solutions
    sol_pattern = re.compile(r'(\d+)\.\s+Option\s+([A-E])\s+(.*?)(?=\s*\d+\.\s+Option|$)', re.DOTALL)
    solutions = {}
    for sol_match in sol_pattern.finditer(solutions_text):
        sol_id = int(sol_match.group(1))
        sol_opt = sol_match.group(2).upper()
        sol_expl = sol_match.group(3).strip()
        solutions[sol_id] = {'answer': sol_opt, 'explanation': sol_expl}

    # Merge
    for q in questions:
        sol = solutions.get(q['id'], {})
        q['answer'] = sol.get('answer', '')
        q['explanation'] = sol.get('explanation', '')

    return questions

with open('c:/Users/SURESH G/OneDrive/Desktop/Practice Web/career-platform/data/aptitude/numbers.txt', 'r') as f:
    text = f.read()

questions = parse_questions(text)

with open('c:/Users/SURESH G/OneDrive/Desktop/Practice Web/career-platform/data/aptitude/numbers_data.json', 'w') as f:
    json.dump(questions, f, indent=2)

print(f"Parsed {len(questions)} questions.")
