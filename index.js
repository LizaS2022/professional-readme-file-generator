// collecting using inout library
const inquirer = require('inquirer');

// writing to a filesystem library
const fs = require('fs');

const generateMarkdown = require('./generateMarkdown');

// buidling dynamic README file 

const questions = [ 

    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
      },

      {
        type: 'input',
        name: 'description',
        message: 'Provide a short project description',
      },

      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your poject?',
      },

      {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instrcutions and examples?',
      },

      {
        type: 'input',
        name: 'imagePath',
        message: 'Entr the path to the image file:',
      },

      {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ["Apache","GNU", "MIT","BSD 2", "BSD 3","Boost Software", "Creative Commons","Eclipse Public",
        "GNU Affero General","GNU General","GNU Lesser","Mozilla", "Unlicensed"]
      },

      {
        type: 'input',
        name: 'contributing',
        message: 'List contributors, whether third-party or tutorial followed',
      },

      {
        type: 'input',
        name: 'tests',
        message: 'Tests created for the app and execution examples',
      },

      {
        type: 'input',
        name: 'questions',
        message: 'enter your email address',
      },

      {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
      },
      
  ];


    function writeToFile(readmeFile, data) {
      
      fs.writeFile(readmeFile, data, (err) => 
      err ? console.log(err) : console.log("successfuly created HTML file")
    )}
  
  

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {const readmeContent = generateMarkdown(answers)
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();