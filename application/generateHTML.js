// This function sets template for the README file for later using template literals to be able to input the user's answers
const generateMD = ({ username, email, projectName, description, license, install, tests, needToKnow, questions, liveLink, credits, usage }) => 
`![license](https://img.shields.io/static/v1?label=license&message=${license.split(' ').join('%20')}&color=blueviolet)

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

module.exports = {
    generateMD,
}