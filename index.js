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
      }
    });
};

const addNewEmployee = () => {
  const addManager = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name?",
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
          name: "office",
          message: "What is your office number?",
        },
      ])
      .then((managerInput) => {
        const { name, id, email, office } = managerInput;
        const manager = new Manager(name, id, email, office);
        console.log(managerInput, manager, teamMembers);
        teamMembers.push(manager);
        console.log(teamMembers);
        console.log(`${manager.name} added`);
        storeTeamMembers();
      });
  };

  // Function to add new engineer
  const addEngineer = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name?",
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
        console.log(engineerInput);
        const engineer = new Engineer(name, id, email, office);
        console.log(engineer);
        teamMembers.push(engineer);
        console.log(`${engineer.name}added`);
        storeTeamMembers();
      });
  };

  // Function to add new Intern
  const addIntern = () => {
    inquirer
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
        const { name, id, email, school } = internInput;
        const intern = new Intern(name, id, email, school);
        teamMembers.push(intern);
        console.log(`${intern.name} added`);
        storeTeamMembers();
      });
  };
  return { addManager, addEngineer, addIntern };
};
const { addManager, addEngineer, addIntern } = addNewEmployee();

// Loop through team members generate HTML card if/then statement
// Global html... iterate teammembers... add storeTeamMemb
const storeTeamMembers = () => {
  fs.writeFileSync("./dist/index.html", generateMarkdown(teamMembers[0]));
};

addEmployee();
