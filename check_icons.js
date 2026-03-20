const fc = require('react-icons/fc');
const icons = [
  'FcOrganization', 
  'FcGlobe', 
  'FcShield', 
  'FcCurrencyExchange', 
  'FcIdea', 
  'FcLineChart',
  'FcTimeline'
];

icons.forEach(name => {
  console.log(`${name}: ${typeof fc[name]}`);
});
