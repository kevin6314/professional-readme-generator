// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data.license) {
  switch (license) {
    case 'MIT':
      return `[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Apache':
      return '[![Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'Creative Commons':
      return '[![Creative Commons](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license){
    case 'MIT':
      return `[MIT License](https://opensource.org/licenses/MIT)`;
    case 'Apache':
      return '[Apache License](https://opensource.org/licenses/Apache-2.0)';
    case 'Creative Commons':
      return '[Creative Commons License](http://creativecommons.org/publicdomain/zero/1.0/)';
    default: 
      return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return ' ';
  } else {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  console.log(licenseBadge);
  console.log(licenseLink);

  return `${licenseBadge} License Used: [${license}] ${licenseLink}`; 
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  
  const licenseSection = renderLicenseSection(data.license);

  console.log(licenseSection);

    const readmeTop = `
# ${data.title}

## Description

${data.description}
`;

const readmeContentsTable = `
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#Questions)

`;

const readmeBottom = `
## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.collaborators}
${data.assets}

## License

${licenseSection}

## Tests

${data.tests}

## Questions

Instructions on how to reach me with additional questions:
- [GitHub](https://${data.gitUsername})
- [Email](mailto:${data.email}?subject=[Github]%20Source%20Generate%20README)

`;

  let combinedReadme;

  if (data.contentsTable === true){
    combinedReadme = readmeTop + readmeContentsTable + readmeBottom;
  } else {
    combinedReadme = readmeTop + readmeBottom;
  };

  console.log(combinedReadme);
  return combinedReadme;
  
}

module.exports = generateMarkdown;