const os = require('os');
const networkInterfaces = os.networkInterfaces();
const results = [];

for (const name of Object.keys(networkInterfaces)) {
    for (const net of networkInterfaces[name]) {
        if (net.family === 'IPv4' && !net.internal) {
            results.push({ name, address: net.address });
        }
    }
}

console.log('Mobile access details:');
results.forEach(res => {
    console.log(`- ${res.name}: http://${res.address}:3000`);
});
