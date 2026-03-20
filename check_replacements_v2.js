const fc = require('react-icons/fc');
const icons = [
  'FcDepartment',
  'FcAssistant',
  'FcBriefcase',
  'FcBusiness'
];

icons.forEach(name => {
  console.log(`${name}: ${typeof fc[name]}`);
});
