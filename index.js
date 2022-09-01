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
        choices: ["Manager", "Engineer", "Intern", "Finish"],
      },
    ])
    .then((data) => {
      if (data.role === "Manager") {
        return addManager();  
      }
      if (data.role === "Engineer") {
        return addEngineer();
      }
      if (data.role === "Intern") {
        return addIntern();
      }
      if (data.role === "Finish") {
        storeTeamMembers();
        process.exit();
      }
    });
};

const addNewEmployee = () => {
  const addManager = () => {
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
        teamMembers.push(manager);
        console.log(`${manager.name} added`);
      });
  };

  // Function to add new engineer
  const addEngineer = () => {
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
        const { name, id, email, school } = internInput;
        const intern = new Intern(name, id, email, school);
        teamMembers.push(intern);
        console.log(`${intern.name} added`);
      });
  };
  return { addManager, addEngineer, addIntern };
};
const { addManager, addEngineer, addIntern } = addNewEmployee();

const storeTeamMembers = () => {
  fs.writeFileSync("./dist/index.html", generateMarkdown(teamMembers));
};

// Creating start function to create asynch method
const start = async () =>{
  while(true){
    await addEmployee();
  }
}

start();