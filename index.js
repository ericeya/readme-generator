// Need inquirer package's prompt function to ask for user input in terminal.
// There are prompts for 
//
//  ============ USER INPUT ============== //
//     #title of the project (this would be the name of the readme file)
//     #Description of the project
//     #Installation instructions of the project
//     #Usage information of the project
//     #Contibution guidelines of the project
//     #Test instruction of the project
//     #github user name = > added to questions section
//     #email address = > added to questions section with how to reach on additional questions
//
// ============= CHOOSE FROM LIST ============== //
//     #Choose license from list of options
//           -> this would generate a badge that is added near the top of the README.
//           -> Notice is added to section of the README entitled License
//  List of licenses: 
//     - Apache License 2.0
//       [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
//     - GNU General Public License v3.0
//       [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
//     - MIT License
//       [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//     - BSD 2-Clause "Simplified" License
//       [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
//     - BSD 3-Clause "New" or "Revised" License
//       [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
//     - Boost Software License 1.0
//       [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
//     - Creative Commons Zero v1.0 Universal
//       [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
//     - Eclipse Public License 2.0
//       [![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)
//     - GNU Affero General Public License v3.0
//       [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
//     - GNU General Public License v2.0
//       [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
//     - GNU Lesser General Public License v2.1
//       [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%202.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html)
//     - Mozilla Public License 2.0
//       [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
//     - The Unlicense
//       [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
//
// **clicking on table of contents will take the user to corresponding sections** //

const inq = require('inquirer')
const gM= require('./utils/generateMarkdown.js')
const fs = require('fs')

console.log(gM.renderLicenseBadge('MIT License'))

inq
    .prompt([
        {
            type: "input" ,
            message: "What is the title of the project? (This will be the name of your .md file name)" ,
            name: "title" ,
        },
        {
            type: "input" ,
            message: "Please describe the project in a few sentences." ,
            name: "description" ,
        },
        {
            type: "input" ,
            message: `Please provide instructions for installation. If it requires code block for explanation, please enter it on the next question.` ,
            name: 'installation' ,
        },
        {
            type: 'input' ,
            message: 'If you have a code block you would like to put into installation, first confirm the language you are using. If no code block is being used, just press enter.' ,
            name: 'installationLanguage' ,
        },
        {
            type: 'input' ,
            message: 'If you entered the language on the question above, please enter the code block. If none, just press enter:' ,
            name: 'installationCodeBlock' ,
        },
        {
            type: 'input' ,
            message: 'Please provide a usage for this project' ,
            name: 'usage' ,
        },
        {
            type: 'input'  ,
            message: 'Please enter contribution guideline for this project.' ,
            name: 'contribution' ,
        },
        {
            type: 'input'  ,
            message: 'Provide test instruction for the project.' ,
            name: 'test' ,
        },
        {
            type: 'input'  ,
            message: 'Please provide your github user name: ' ,
            name: 'githubUsername' ,
        },
        {
            type: 'input'  ,
            message: 'Please provide your email address: ' ,
            name:  'email' ,
        },
        {
            type: 'list'  ,
            message: 'Please select the license used: ' ,
            name: 'license' ,
            choices: ['Apache License 2.0', 
            'GNU General Public License v3.0', 
            'MIT License',
            'BSD 2-Clause "Simplified" License', 
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0', 
            'GNU Affero General Public License v3.0', 
            'GNU General Public License v2.0', 
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0', 
            'The Unlicense' ]
        }
    ])
    .then((response) => {
        const licenseBadge = gM.renderLicenseBadge(response.license)
        console.log(licenseBadge)
//         const readMeContent = `
        
// # Description

// ${gM.renderLicenseBadge(response.license)}<br><br>

// ${response.description}

// # Table of Contents

// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Contributing](#contributing)
// * [Tests](#tests)
// * [Questions](#questions)

// # Installation

// ${response.installation}

// \`\`\`${response.installationLanguage}
// ${response.installationCodeBlock}
// \`\`\`

// # Usage

// ${response.usage}

// # License

// Licensed by ${response.license}

// # Contributing

// ${response.contribute}

// # Tests

// ${response.test}

// # Questions

// Please reach me via github or email if you have any questions, concerns, or remarks 😉<br><br>
//     - [My Github Link](https://github.com/${response.githubUsername}) <br>
//     - ${response.email}
        
//         `
//         fs.writeFile(`./output/${response.title}.md`, readMeContent, (err) => (err) ? console.log(err): console.log("success!") )


    })

  