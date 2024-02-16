// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');

console.log(fs, inquirer)

const generateHTML = ({ title, installation, usage, license, contributors, tests, github, email }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">${title}</h1>
    </div>
    <div>
      <h1 class="display-4">Description</h1>
        <p>${description}</p>
    </div>
    <div>
      <h1 class="display=4>Installation</h1>
        <p>${installation}</p>
    </div>
    <div>
      <h1 class="display-4">Usage</h1>
        <p>${usage}</p>
    </div>
      <h1 class="display-4">Contributors</h1>
        <p>${contributors}</p>
    <div>
      <h1 class="display-4">Tests</h1>
        <p>${tests}</p>
    </div>
      <ul class="list-group">
      <h1 Contact
        <li class="list-group-item">My GitHub Username: ${github}</li>
        <li class="list-group-item">My Email: ${email}</li>
      </ul>
    </div>
    <div>
      <h1 class="display-4">License</h1>
        <p>${license}</p>
    </div>
  </header>
</body>
</html>`;


// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt ([
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your application?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Describe how your application is used and its purpose:',
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
        message: 'Please enter your GitHub username:',
    },
       
    {
        name: 'email',
        type: 'input',
        message: 'Please enter your email address with contact instructions:'
    },
])

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
.then((answers) => {
    const htmlPageContent = generateHTML(answers);
fs.writeFile('index.html', htmlPageContent, (err) =>
err ? console.error(err) : console.log("Successfully created 'index.html")
);
});


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

