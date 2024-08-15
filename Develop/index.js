// TODO: Include packages needed for this application
const inquirer= require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        name: 'title',
        message: 'What is the title of your website?',
        },
        {
        type: 'input',
        name: 'description',
        message: 'What is the description of your website?',
        },
        {
        type: 'input',
        name: 'installation',
        message: 'What did you use for the installation of your website?',
        },
        {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your website?',
        },
        {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
        },
        {
        type: 'input',
        name: 'contributing',
        message: 'What is the contribution of your website?',
        },
        {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
        },
        {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:',
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err) {
            console.error(err);
            return;
        }
        console.log(`README.md has been successfully created as ${fileName}`);
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers)=>{
            const readMeContent= generateMarkdown(answers);
            writeToFile('README.md', readMeContent);
        })
        .catch((err) => {
            console.error(err);
        })
};

// Function call to initialize app
init();