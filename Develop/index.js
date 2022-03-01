//----Required Packages----//

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

//----Questions array to assemble readme content----//

const content = [
  {
    type: "input",
    message: "What is the title of your?",
    name: "title",
  },
  {
    type: "input",
    message: "How would you describe your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the required installations?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions for usage.",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose your license:",
    choices: ["MIT License", "GNU GPLv3", "Unlicense"],
    name: "license",
  },
  {
    type: "input",
    message: "List the contributing members",
    name: "contributors",
  },
  {
    type: "input",
    message: "Provide testing information.",
    name: "test",
  },
  {
    type: "input",
    message: "Provide you Github account information.",
    name: "github",
  },
  {
    type: "input",
    message: "What is your contact email address?",
    name: "email",
  },
];

//----App Functions----//

function init() {
  inquirer
    .prompt(content)
    .then((data) => writeToFile("README.md", generateMarkdown(data)))
    .then(() => console.log("README.md created"));
}

function writeToFile(fileName, data, options) {
  return fs.writeFileSync(fileName, data, options);
}

//----Initialize app----//
init();