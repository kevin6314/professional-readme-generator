const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter your project title.',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Provide a short description explaining the what, why, and how of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
            name: 'collaborators'
        },
        {
            type: 'input',
            message: 'List any third-party assets or tutorials that require attribution.',
            name: 'assets'
        },
        {
            type: 'checkbox',
            message: 'Choose a license from the list of options below.',
            name: 'license',
            choices: ['MIT', 'Apache', 'PostgreSQL License', 'Creative Commons', 'Other']
        },
        {
            type: 'input',
            message: 'Go the extra mile and write tests for your application.',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Enter your GitHub username so people can reach you with questions:',
            name: 'gitUsername'
        },
        {
            type: 'input',
            message: 'Enter your email address so people can reach you with questions:',
            name: 'email'
        },
        {
            type: 'confirm',
            message: 'Do you want to add a table of contents?',
            name: 'contentsTable'
        },
    ])

    .then((answers) => {

        console.log(answers);
        console.log(answers.contentsTable);

        const readmeTop = `
            # ${answers.title}

            ## Description

            ${answers.description}
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

            ${answers.installation}

            ## Usage

            ${answers.usage}

            ## Credits

            ${answers.collaborators}
            ${answers.assets}

            ## License

            License Used: ${answers.license}

            ## Tests

            ${answers.tests}
        
            ## Questions

            Instructions on how to reach me
            - [GitHub](https://{${answers.gitUsername}})
            - [Email](mailto:{${answers.email}})
            
            `;

        let combinedReadme;

        if (answers.contentsTable === true){
            combinedReadme = readmeTop + readmeContentsTable + readmeBottom;
        } else {
            combinedReadme = readmeTop + readmeBottom;
        };
        
        fs.writeFile('README.md', combinedReadme, err => {
            err ? console.log('Fail!') : console.log('Success!');
        })

    });