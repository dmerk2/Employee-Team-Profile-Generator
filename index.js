// Importing node modules inquirer and jest
const inquirer = require("inquirer");
const jest = require("jest");
// Importing 'file system'
const fs = require("fs");
// Creating profile from generateMarkdown file
const generateMarkdown = require("./src/generateMarkdown");
// Empty array to add teamMembers
const teamMembers = [];


// Function using inquirer for questions to ask for a Manager
const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name")
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee ID?",
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log("Please enter your employee ID");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter your email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your office number?",
      validate: (officeNumber) => {
        if (officeNumber) {
          return true;
        } else {
          console.log("Please enter your office number");
          return false;
        }
      },
    },
  ])
  .then(managerInput => {
    const {name, id, email, number} = managerInput;
    // Create a new promise named Manager with the params needed
    const manager = new Manager (name, id, email, number);
    console.log(manager);
  })
};

const init = () => {
  addManager()
    // Write a new file taking input from generateMarkdown file and writing a new index.html
    .then((data) =>
      fs.writeFileSync("./dist/index.html", generateMarkdown(data))
    )
    // If it was successful console log Successfully Added Employee
    .then(() => console.log("Successfully Added Employee"))
    // If there are any errors console log error
    .catch((err) => console.error("error", err));
};

init();
