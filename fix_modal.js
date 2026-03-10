const fs = require('fs');
let code = fs.readFileSync('src/components/newspaper/RewardModal.jsx', 'utf8');
code = code.replace(
    /\\{\\[\\.\\.\\.Array\\(50\\)\\]\\.map\\(\\(\\_, i\\) => \\(/,
    \{Array.from({ length: 50 }).map((_, i) => {\n                        const randomX = Math.random() * window.innerWidth;\n                        const randomDuration = 3 + Math.random() * 2;\n                        const randomDelay = Math.random() * 0.5;\n                        return (\
);
code = code.replace(/x: Math\\.random\\(\\) \\* window\\.innerWidth,/, 'x: randomX,');
code = code.replace(/duration: 3 \\+ Math\\.random\\(\\) \\* 2,/, 'duration: randomDuration,');
code = code.replace(/delay: Math\\.random\\(\\) \\* 0\\.5,/, 'delay: randomDelay,');
code = code.replace(/>\\n                    \\)\\)\\}/g, '>\\n                        );\n                    })\}');
fs.writeFileSync('src/components/newspaper/RewardModal.jsx', code);

