const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = ({ username, email, projectName, description, license, install, tests, needToKnow, questions, liveLink, credits, usage }) => `
# ${projectName}

## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- [Contact](#contact)

## Installation

${install}

## Usage

${needToKnow}

${usage}

Here is a link to the live site: ${liveLink}

<!-- Here is a slot to put in screenshots -->




## Credits 

${credits}

## License

![license](https://img.shields.io/badge/license-${license}-43deaa)

## Contributing

${questions}

## Testing

${tests} 

## Contact

My GitHub is ${username} and my email is ${email}`

inquirer.prompt([
        {
            type: 'input',
            name:'username',
            message: 'Please enter your GitHub username.',
        },
        {
            type: 'input',
            name:'email',
            message: 'Please enter your email address.',
        },
        {
            type: 'input',
            name:'projectName',
            message: 'Please enter desired project name.',
        },
        {
            type: 'input',
            name:'description',
            message: 'Please enter a short description of your project.',
        },
        {
            type: 'list',
            name:'license',
            message: "Please select the project's license type.",
            choices: ['MIT', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name:'install',
            message: 'Please enter a description of how to install dependencies.',
        },
        {
            type: 'input',
            name:'tests',
            message: 'Please enter what command is used to run tests.',
        },
        {
            type: 'input',
            name:'needToKnow',
            message: 'Please enter what the user needs to know about using the repo.',
        },
        {
            type: 'input',
            name:'questions',
            message: 'Please enter what the user needs to know about contributing to the repo.',
        },
        {
            type: 'input',
            name: 'liveLink',
            message: 'Please enter the link to the live site.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please enter your credited sources here.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter a link to the demo video.',
        }

    ])
    .then((userInput) => {
        const mdContent = generateMD(userInput);
        fs.writeFile('README.md', mdContent, (error) =>
            error ? console.log(error) : console.log('README file generated successfully!')
        );
    })