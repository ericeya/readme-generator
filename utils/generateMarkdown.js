// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  
function renderLicenseBadge(license) {
    license === 'Apache License 2.0' ?  `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    : license === 'GNU General Public License v3.0' ? `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    : license === 'MIT License' ? `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    : license === 'BSD 2-Clause "Simplified" License'? `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    : license === 'BSD 3-Clause "New" or "Revised" License' ? `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    : license === 'Boost Software License 1.0' ? `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    : license === 'Creative Commons Zero v1.0 Universal' ? `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    : license === 'Eclipse Public License 2.0' ? `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`
    : license === 'GNU Affero General Public License v3.0' ? `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    : license === 'GNU General Public License v2.0' ? `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    : license === 'GNU Lesser General Public License v2.1' ? `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%202.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)`
    : license === 'Mozilla Public License 2.0' ? `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    : license === 'The Unlicense' ? `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    : `invalid license to render badge`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = { 
  generateMarkdown,
  renderLicenseBadge,

}
