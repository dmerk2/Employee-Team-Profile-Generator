// Importing node modules inquirer and jest
const inquirer = require("inquirer");
const jest = require("jest");
// Importing 'file system'
const fs = require("fs");
// Creating profile from generateMarkdown file
const generateMarkdown = require("./src/generateMarkdown");
// Empty array to add teamMembers
const teamMembers = [];

// Team profiles
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Which member do you need to add?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((data) => {
      if (data.role === "Manager") {
        addManager();
      }
      if (data.role === "Engineer") {
        addEngineer();
      }
      if (data.role === "Intern") {
        addIntern();
        // data = new Intern(name, id, email, school);
        // teamMembers.push(data);
      }
    });
};
// Function using inquirer for questions
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "office",
        message: "What is your office number?",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, office } = managerInput;
      const manager = new Manager(name, id, email, office);
      teamMembers.push(manager);
      console.log(`${manager.name} added`, teamMembers);
    });
};

// Function to add new engineer
const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter your name.",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your Github username?",
      },
    ])
    .then((engineerInput) => {
      const { name, id, email, office } = engineerInput;
      const engineer = new Engineer(name, id, email, office);
      teamMembers.push(engineer);
      console.log(`${engineer.name}added`);
    });
};

// Function to add new Intern
const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did you attend?",
      },
    ])
    .then((internInput) => {
      const { name, id, email, office } = internInput;
      const intern = new Intern(name, id, email, office);
      teamMembers.push(intern);
      console.log(`${intern.name} added`);
    });
};

const init = () => {
  addEmployee()
    // Write a new file taking input from generateMarkdown file and writing a new index.html
    .then((data) =>
      fs.writeFileSync("./dist/index.html", generateMarkdown(data))
    )
    // If it was successful console log Successfully Added Employee
    .then(() => console.log(`Successfully Added Employee: ${data.name}`))
    // If there are any errors console log error
    .catch((err) => console.error("error", err));
};

init();
