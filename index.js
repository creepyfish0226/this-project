const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require("fs")
console.log("Welcome to this")

const questions = [{
    type: "input",
    name: "userName",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?"
  },
  {
    type: "list",
    name: "license",
    message: "What is this project licensed under?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "dependencies",
    message: "How do you install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "contributions",
    message: "How do you contribute to the project?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you run tests on the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What do you need to know about using this repo?"
  }

]

inquirer
  .prompt(questions)
  .then(answers => {
    console.log(answers)
    fs.writeFile(`${answers.title}.md`, generateMarkdown(answers), err => {
      if (err) throw err;
      console.log('The file has been saved!');
    })
  })