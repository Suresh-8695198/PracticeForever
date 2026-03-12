import json

with open('c:/Users/SURESH G/OneDrive/Desktop/Practice Web/career-platform/data/aptitude/numbers_data.json', 'r') as f:
    data = json.load(f)

def clean_text(text):
    if not isinstance(text, str): return text
    # Fix common encoding issues from the provided text
    text = text.replace('\u00c3\u2014', '×')
    text = text.replace('\u00e2\u20ac\u00a6', '...')
    text = text.replace('\u00e2\u02c6\u2019', '-')
    text = text.replace('\u00e2\u0178\u00b6', '→')
    text = text.replace('\u00e2\u02c6\u0161', '√')
    text = text.replace('\u00c3\u00b7', '÷')
    return text

def clean_obj(obj):
    if isinstance(obj, dict):
        return {k: clean_obj(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [clean_obj(v) for v in obj]
    else:
        return clean_text(obj)

cleaned_data = clean_obj(data)

# Convert to JS
js_content = f"export const questions = {json.dumps(cleaned_data, indent=2, ensure_ascii=False)};"
with open('c:/Users/SURESH G/OneDrive/Desktop/Practice Web/career-platform/data/aptitude/numbers.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
