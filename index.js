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

// Function using inquirer for questions to add a Manager
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager ID?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter your manager ID");
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
        name: "office",
        message: "What is your office number?",
        validate: (office) => {
          if (office) {
            return true;
          } else {
            console.log("Please enter your office number?");
            return false;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, office } = managerInput;
      const manager = new Manager(name, id, email, office);
      teamMembers.push(manager);
      console.log(manager);
    })
    .then(
      (addIntern = () => {
        return inquirer
          .prompt([
            {
              type: "list",
              name: "position",
              message: "What employees would you like to add to the team?",
              choices: ["Engineer", "Intern"],
            },
            {
              type: "input",
              name: "name",
              message: "What is their name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is their employee id?",
            },
            {
              type: "input",
              name: "email",
              message: "What is their email address?",
            },
            {
              type: "input",
              name: "school",
              message: "What school did they attend?",
            },
          ])
          .then((internInput) => {
            const { position, name, id, email, school } = internInput;
            const intern = new Intern(position, name, id, email, school);
            teamMembers.push(intern);
            console.log(intern);
          });
      })
    );
};

// .then(() => {
//   let { name, id, email, role, github} = employeeData;
//   if (role === "Engineer") {
//     employee = new Engineer(name, id, email, github);
//     console.log(employee);
//   } else if (role === "Intern") {
//     employee = new Intern(name, id, email, school);
//     console.log(employee);
//     teamMembers.push(employee);
//   }
// });

// Create new employee based on user input data
// const renderPosition = (position) => {
//   if (position === "Intern") {
//     console.log("Intern");
//     employee = new Intern(name, id, email, school);
//   } else if (position === "Engineer") {
//     console.log("Engineer");
//     employee = new Engineer(name, id, email, github);
//   } else if (position === "Manager") {
//     console.log("Manager");
//     employee = new Manager(name, id, email, office);
//   } else {
//     return "";
//   }
//   teamMembers.push(employee);
// };

const init = () => {
  addManager()
    // Write a new file taking input from generateMarkdown file and writing a new index.html
    .then((data) =>
      fs.writeFileSync("./dist/index.html", generateMarkdown(data))
    )
    // If it was successful console log Successfully Added Employee
    .then(() => console.log(`Successfully Added Employee: ${employee}`))
    // If there are any errors console log error
    .catch((err) => console.error("error", err));
};

init();
