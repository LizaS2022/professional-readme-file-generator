// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "Apache":
            return "![Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";

        case "GNU":
            return "![GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
        case "MIT":
            return "![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
        case "BSD 2":
            return "![BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)";
        case "BSD 3":
            return "![BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
        case "Boost Software":
            return "![Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
        case "Creative Commons":
            return "![CC0](https://licensebuttons.net/p/zero/1.0/80x15.png)";
        case "Eclipse Public":
            return "![EPL](https://img.shields.io/badge/License-EPL%201.0-red.svg)";
        case "GNU Affero General":
            return "![AGPL](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)";
        case "GNU General":
            return "![GPL](https://img.shields.io/badge/License-GPL%20v3-blue.svg)";
        case "GNU Lesser":
            return "![LGPL](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)";
        case "Mozilla":
            return "![MPL](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
       default:
        return "";


    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

    switch (license) {
        case "Apache":
            return "http://www.apache.org/licenses/LICENSE-2.0";

        case "GNU":
            return "https://choosealicense.com/licenses/agpl-3.0/";
        case "MIT":
            return "http://choosealicense.com/licenses/mit/"
        case "BSD 2":
            return "https://opensource.org/license/bsd-2-clause/"
        case "BSD 3":
            return "https://opensource.org/license/bsd-3-clause/"
        case "Boost Software":
            return "https://www.boost.org/LICENSE_1_0.txt"
        case "Creative Commons":
            return "https://creativecommons.org/choose/"
        case "Eclipse Public":
            return "https://www.eclipse.org/legal/epl-2.0/"
        case "GNU Affero General":
            return "https://www.gnu.org/licenses/agpl-3.0.en.html"
        case "GNU General":
            return "https://www.gnu.org/licenses/gpl-3.0.en.html"
        case "GNU Lesser":
            return "https://www.gnu.org/licenses/lgpl-3.0.en.html"
        case "Mozilla":
            return "http://mozilla.org/MPL/2.0/"
       default:
        return "";


    }



}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseBadge = renderLicenseBadge(license);
    let licenseLink = renderLicenseLink(license);

    if (license == "Unlicensed") {
        return" ";
    }
   else {
    return `Licensed under the [${license}](${licenseLink}) license.`
   }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
    return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
            
  - [Description](#description)
  - [installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
      
 
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  ![screenshot](${data.imagePath})
    
  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}
 
  ## Tests
  ${data.tests}
 
  ## Questions
  
  [The URL of the GitHub profile](https://github.com/${data.userName}).
  For additional questions, dont hesitate to contact me at ${data.questions}.
`;
}

module.exports = generateMarkdown;
