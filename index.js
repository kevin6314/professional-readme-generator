//----Packages needed for this application----//

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//----Array of questions for user input----//

const questions = [
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
        choices: ['MIT', 'Apache', 'Creative Commons', 'Other']
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
];

//----Create a function to initialize app----//
async function init() {
    const data = {};

    for (const question of questions) {
        const {name, message} = question;
        const answer = await inquirer.prompt([question]);
        data[name] = answer[name];
    }

    const markdownContent = generateMarkdown(data);
    console.log(markdownContent);
    writeToFile(markdownContent);
}

//----Function to write README file----//
function writeToFile(data) {

    fs.writeFile('README.md', data, err => {
    err ? console.log('Error writing to file!') : console.log('README.md successfully created!');
    });
}

init();