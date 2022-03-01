// ----License badge---- //
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GNU GPL 3.0":
      return "https://opensource.org/licenses/GPL-3.0";
    default:
      return "";
  }
}

// ----License link---- //

function renderLicenseLink(license) {}
switch (license) {
  case "MIT":
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)]";
  case "GNU GPL 3.0":
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  case "Unlicense":
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
  default:
    return "";
}

// ----Return license info to readme---- //

function renderLicenseSection(license) {
  return license !== "none" ? `${license}\n${renderLicenseLink(license)}` : "";
}

// ----Generate markdown for README---- //
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation-Instructions)
  * [Usage Instructions](#Usage-Instructions)
  * [License](#License)
  * [Contributing Members](#Contributing-Members)
  * [Testing](#Testing)    
  * [Questions/Inquiries](#Questions/Inquiries)

  ## Description
  ${data.description}


  ## Installation Instructions 
  ${data.installation}

  ## Usage Instructions
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing Members
  ${data.contributors}

  ## Testing 
   ${data.test}

  ## Questions/Inquiries 

  ### GitHub Profile
  [GitHub Profile](http://github.com/${data.github})

  ### Email
  ${data.email}
`;
}
module.exports = generateMarkdown;
