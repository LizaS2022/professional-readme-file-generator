// collecting using inout library
const inquirer = require('inquirer');

// writing to a filesystem library
const fs = require('fs');

// buidling dynamic README file 

const generateReadme = ({title, description, installation, usage, imagePath, license, contributing, tests, questions}) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Readme Generator</title>
</head>
<body>
    <header>
        <h1>${title}</h1>
        <div> 
            <h2> Table of Contents </h2>
            <ul>
            <li><a href="#description">Description</a></li>
            <li><a href="#installation">installation</a></li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#license">license</a></li>
            <li><a href="#contributing">Contributing</a></li>
            <li><a href="#tests">Tests</a></li>
            <li><a href="#questions">Questions</a></li>
            </ul>
        </div>
    </header>
    <main>
        <section id="description">
            <h2>Description</h2>
            <p>${description}</p>
        </section>
        <section id="installation">
            <h2>Installation</h2>
            <p>${installation}</p>
        </section>
        <section id="usage">
            <h2>Usage</h2>
            <p>${usage}</p>
            <img src="${imagePath}" alt="app screenshot">
        </section>
        <section id="license">
        <h2>license</h2>
        <p>${license}</p>
    </section>
        <section id="contributing">
            <h2>Contributing</h2>
            <p>${contributing}</p>
        </section>
        <section id="tests">
            <h2>Tests</h2>
            <p>${tests}</p>
        </section>
        <section id="questions">
            <h2>Questions</h2>
            <p>${questions}</p>
        </section>
    </main> 
</body>
</html>`;

inquirer
  .prompt([
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
        type: 'input',
        name: 'license',
        message: 'Add license information',
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
      
  ])
  .then((answers) => {
    const readmeContent = generateReadme(answers);

    fs.writeFile("README.md", readmeContent, (err) => 
    err ? console.log(err) : console.log("successfuly created HTML file")
    
    )
  });
  

