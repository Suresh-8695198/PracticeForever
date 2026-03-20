const fc = require('react-icons/fc');
const icons = [
  'FcLineChart', 
  'FcGlobe', 
  'FcGraduationCap', 
  'FcDocument', 
  'FcLibrary',
  'FcTimeline',
  'FcApproval',
  'FcPodiumWithSpeaker',
  'FcWorkflow',
  'FcIdea',
  'FcSportsMode',
  'FcCollaboration'
];

icons.forEach(name => {
  console.log(`${name}: ${typeof fc[name]}`);
});
