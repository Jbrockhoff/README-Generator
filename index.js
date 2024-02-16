// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');

console.log(fs, inquirer)
// TODO: Create an array of questions for user input
inquirer.prompt ([
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your application?',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What is required to run your application locally?',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How will this application be used?',
    },
    {
        name: 'license',
        type: 'checkbox', 
        message: 'Choose a License',
        choices: ["GPL v3", "ISC", "MIT", "MPL 2.0"],
        
    },
    {
        name: 'contributors',
        type: 'input',
        message: 'Please enter any contributors to this application with username and name of the repository:',
    }, 
    {
        name: 'tests',
        type: 'input',
        message: 'Please describe libraries used for testing software and supply commands:'
    },
    {
        name: 'GitHub',
        type: 'input',
        message: 'Please enter your GitHub username',
    },
       
    {
        name: 'email',
        type: 'input',
        message: 'Please enter your email address with contact instructions'
    },
])
.then((response) =>
response.
? console.log('Success!')
: console.log('Unsuccessful')
);
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {


// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


// Title of project

// Sections:
// Description 
// Table of contents
// installation 
// usage
// License
// Contributing
// tests
// questions

