import os
import datetime

# Base configuration
BASE_URL = "https://practiceforever.app"
TODAY = datetime.date.today().strftime("%Y-%m-%d")

# Static hub pages
static_pages = [
    {"url": "/", "priority": "1.0", "changefreq": "daily"},
    {"url": "/exams", "priority": "0.9", "changefreq": "weekly"},
    {"url": "/aptitude", "priority": "0.9", "changefreq": "weekly"},
    {"url": "/programming", "priority": "0.9", "changefreq": "weekly"},
    {"url": "/current-affairs", "priority": "0.9", "changefreq": "daily"},
    {"url": "/interviews", "priority": "0.9", "changefreq": "weekly"},
    {"url": "/login", "priority": "0.5", "changefreq": "monthly"},
    {"url": "/register", "priority": "0.5", "changefreq": "monthly"},
]

# Aptitude categories/topics mapping (simplified for sitemap)
# Quantitative Aptitude
quant_topics = [
    "numbers", "hcf-lcm", "ages", "profit-and-loss", "percentage", "averages",
    "ratio-and-proportion", "simplification", "time-speed-distance", "boats-and-streams",
    "mixture-and-alligation", "partnership", "time-and-work", "permutations-and-combinations",
    "probability", "si-ci", "problems-on-trains", "surds-and-indices", "clocks-and-calendar",
    "decimals-and-fractions", "discount", "pipes-and-cistern", "square-roots-and-cube-roots",
    "volume-and-surface-area", "stocks-shares"
]

# Logical Reasoning
logical_topics = [
    "number-series", "letter-series", "verbal-classification", "essential-part",
    "analogy", "artificial-language", "matching-definitions", "making-judgments",
    "verbal-reasoning", "logical-games", "logical-problems", "analyzing-arguments",
    "statement-assumption", "statement-conclusion", "course-of-action"
]

# Verbal Ability
verbal_topics = [
    "spotting-errors", "synonyms", "antonyms", "selecting-words", "spellings",
    "sentence-formation", "ordering-of-words", "sentence-correction", "sentence-improvement",
    "sentence-completion", "ordering-of-statements", "paragraph-formation", "cloze-test",
    "comprehension", "one-word-substitution", "idioms-phrases", "change-of-voice",
    "change-of-speech", "verbal-analogies"
]

# Non Verbal Reasoning
non_verbal_topics = [
    "series", "nv-analogy", "nv-classification", "analytical-reasoning", "mirror-images",
    "water-images", "embedded-images", "pattern-completion", "figure-matrix",
    "paper-folding", "paper-cutting", "rule-detection", "grouping-of-images",
    "dot-situation", "shape-construction", "image-analysis", "cubes-dice"
]

# Data Interpretation
di_topics = [
    "tabulation", "bar-graphs", "pie-charts", "line-graphs", "data-interpretation"
]

# HR Topics
hr_topics = [
    "tell-me-about-yourself", "strengths-weaknesses", "why-tcs", 
    "situation-based-scenarios", "resume-deep-dive", "project-discussions", 
    "role-awareness"
]

sitemap_urls = []

# Add static pages
for page in static_pages:
    sitemap_urls.append((f"{BASE_URL}{page['url']}", page['priority'], page['changefreq']))

# Add Aptitude Topics
categories_map = {
    "quantitative-aptitude": quant_topics,
    "logical-reasoning": logical_topics,
    "verbal-ability": verbal_topics,
    "non-verbal-reasoning": non_verbal_topics,
    "data-interpretation": di_topics
}

for cat, topics in categories_map.items():
    # Category hub
    sitemap_urls.append((f"{BASE_URL}/aptitude/{cat}", "0.8", "weekly"))
    # Topics
    for topic in topics:
        sitemap_urls.append((f"{BASE_URL}/aptitude/{cat}/{topic}", "0.7", "weekly"))

# Add Interview Topics (TCS)
sitemap_urls.append((f"{BASE_URL}/interviews/company/tcs", "0.8", "weekly"))
for topic in hr_topics:
    sitemap_urls.append((f"{BASE_URL}/interviews/company/tcs/{topic}", "0.7", "weekly"))
# Add TCS technical topics
tcs_topics = ["numerical-ability", "reasoning-ability", "verbal-ability"]
for topic in tcs_topics:
    sitemap_urls.append((f"{BASE_URL}/interviews/company/tcs/{topic}", "0.7", "weekly"))

# Generate XML
xml_output = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']

for url, priority, freq in sitemap_urls:
    xml_output.append('  <url>')
    xml_output.append(f'    <loc>{url}</loc>')
    xml_output.append(f'    <lastmod>{TODAY}</lastmod>')
    xml_output.append(f'    <changefreq>{freq}</changefreq>')
    xml_output.append(f'    <priority>{priority}</priority>')
    xml_output.append('  </url>')

xml_output.append('</urlset>')

# Write to file
with open('sitemap.xml', 'w') as f:
    f.write("\n".join(xml_output))

print(f"Sitemap generated with {len(sitemap_urls)} URLs.")
