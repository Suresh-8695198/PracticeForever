const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/SURESH G/OneDrive/Desktop/Practice Web/career-platform/data/aptitude';

fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.js') && file !== 'index.js') {
        try {
            const content = fs.readFileSync(path.join(dir, file), 'utf8');
            // Very rough check to see if any questions have only 1 option
            // Look for "options": [ { ... } ] where there's no second {
            const questionBlocks = content.split(/\{[^{}]*"id":\s*\d+/);
            questionBlocks.forEach(block => {
                if (block.includes('"options":')) {
                    const optionsMatch = block.match(/"options":\s*\[\s*\{[^\]]*\}\s*\]/g);
                    if (optionsMatch) {
                        optionsMatch.forEach(m => {
                            const braceCount = (m.match(/\{/g) || []).length;
                            if (braceCount === 1) {
                                console.log(`FILE: ${file} | QUESTION with 1 option found.`);
                            }
                        });
                    }
                }
            });
        } catch (e) {}
    }
});
