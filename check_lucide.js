const lucide = require('lucide-react');
const icons = ['Building2', 'Shield', 'Globe', 'Banknote', 'ArrowRight'];
const undefinedIcons = icons.filter(name => typeof lucide[name] === 'undefined');
console.log('Undefined Lucide Icons:', undefinedIcons);
