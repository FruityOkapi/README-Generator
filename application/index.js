// These objects pull fs and inquirer dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// This function sets template for the README file for later using template literals to be able to input the user's answers
const generateMD = ({ username, email, projectName, description, license, install, tests, needToKnow, questions, liveLink, credits, usage }) => 
`![license](https://img.shields.io/static/v1?label=license&message=${license}&color=blueviolet)

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
- [Questions](#questions)

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

This application is covered under the ${license} license. Feel free to read more in the license file.

## Contributing

${questions}

## Testing

${tests} 

## Questions

If you have any questions here's my [GitHub profile](https://github.com/${username}) and feel free to email me the questions directly at ${email}`

// This starts the prompting of the user after they execute the starting command
inquirer.prompt([
        {
            // This sets the type of prompt. Input lets the user type their response and it saves as a string
            type: 'input',
            // This sets the data type's name to be grabbed later
            name:'username',
            // This is the prompt they see in the command line. 
            message: 'Please enter your GitHub username (case sensitive).',
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
            // List prompts give a multiple choice question that can be selected using the arrow keys and the enter key and saves the selection as a string
            type: 'list',
            name:'license',
            message: "Please select the project's license type.",
            // This is the array that holds all the choices that the user gets for the prompt
            choices: ['MIT', 'GPL 3.0', 'BSD 3', 'None'],
            filter(val) {
                return val.split(' ').join('%20');
            },
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
    // This then (haha) executes a arrow function that creates the file
    .then((userInput) => {
        // This object then sets the previous function, generateMD, to have the data from the prompts above
        const mdContent = generateMD(userInput);
        // This function then uses fs to make a file with the syntax of ("file name", "content of file", "error function")
        fs.writeFile('README.md', mdContent, (error) =>
            // The below line is a short hand if else statement. "if error is true then console log the error; if false then console log success message"
            error ? console.log(error) : console.log('README file generated successfully!')
        );
    })