const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const requiredFiles = [
  'index.html',
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  'SECURITY.md',
  'CHANGELOG.md',
  'docs/AI_DESIGN.md',
  'docs/OPENAI_INTEGRATION.md',
  '.github/workflows/ci.yml',
  '.github/pull_request_template.md',
  '.github/dependabot.yml'
];

for (const file of requiredFiles) {
  assert(fs.existsSync(path.join(root, file)), `Missing required file: ${file}`);
}

const html = read('index.html');
const scriptMatch = html.match(/<script>([\s\S]*)<\/script>/);
assert(scriptMatch, 'index.html must contain the game script');
new Function(scriptMatch[1]);

const requiredHtml = [
  'AI生成挑战',
  'bouncemaster.aiProfile.v1',
  'BOUNCEMASTER_AI_ENDPOINT',
  'requestRemoteChallenge',
  'buildLocalChallenge',
  'AI Seed',
  'precision',
  'rhythm',
  'recovery',
  'endurance'
];

for (const token of requiredHtml) {
  assert(html.includes(token), `index.html missing expected token: ${token}`);
}

const readme = read('README.md');
assert(readme.includes('AI Director'), 'README should document AI Director');
assert(readme.includes('https://yeshao99.github.io/bouncemaster/'), 'README should link the live demo');

const security = read('SECURITY.md') + read('docs/OPENAI_INTEGRATION.md');
assert(security.includes('Do not place OpenAI API keys'), 'Security docs must forbid browser API keys');
assert(security.includes('server-side') || security.includes('serverless'), 'Security docs must require server-side key storage');

const license = read('LICENSE');
assert(license.startsWith('MIT License'), 'LICENSE must be MIT');

console.log('Validation passed');
