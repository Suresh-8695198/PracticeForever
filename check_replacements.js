const fc = require('react-icons/fc');
const icons = [
  'FcPrivacy',
  'FcDataProtection',
  'FcLock',
  'FcSafetyCertificate',
  'FcApproval'
];

icons.forEach(name => {
  console.log(`${name}: ${typeof fc[name]}`);
});
