//This function generates the license button/information based on user selection
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'MPL2.0') {
    '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'ISC') {
    '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC'
  } else 
    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
}


//This function generates markdown and creates Table of Contents linking sections of the README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributors](#contributors)
5. [Tests](#tests)
6. [Contact Information](#contacts)

## Installation
${data.installation}

## Usage
${data.usage}

## Licaense
${data.license}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Contacts
  ${data.GitHub}
  ${data.email}
`;
}

module.exports = generateMarkdown;