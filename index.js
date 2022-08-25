// Importing node modules inquirer and jest
const inquirer = require("inquirer");
const jest = require("jest");
// Importing 'file system'
const fs = require("fs");
// Creating profile from generateMarkdown file
const generateMarkdown = require("./src/generateMarkdown");
const { choices } = require("yargs");
// Empty array to add teamMembers
const teamMembers = [];

// Function using inquirer for questions to add a Manager
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
          console.log("Please enter your name");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "position",
      message: "What is your job title?",
      choices: ["Engineer", "Intern", "Manager"],
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
  ]);
};

// Function using inquirer for questions to add an Engineer
// const addEngineer = () => {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//       validate: (nameInput) => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log("Please enter your name")
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "id",
//       message: "What is your employee ID?",
//       validate: (id) => {
//         if (id) {
//           return true;
//         } else {
//           console.log("Please enter your employee ID");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "What is your email?",
//       validate: (email) => {
//         if (email) {
//           return true;
//         } else {
//           console.log("Please enter your email");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "github",
//       message: "What is your Github username?",
//       validate: (github) => {
//         if (github) {
//           return true;
//         } else {
//           console.log("Please enter your GitHub username");
//           return false;
//         }
//       },
//     },
//   ])
// };

// Function using inquirer for questions to add an Intern
// const addIntern = () => {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?",
//       validate: (nameInput) => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log("Please enter your name")
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "id",
//       message: "What is your employee ID?",
//       validate: (id) => {
//         if (id) {
//           return true;
//         } else {
//           console.log("Please enter your employee ID");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "What is your email?",
//       validate: (email) => {
//         if (email) {
//           return true;
//         } else {
//           console.log("Please enter your email");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "school",
//       message: "What school did you attend?",
//       validate: (school) => {
//         if (school) {
//           return true;
//         } else {
//           console.log("Please enter what school you attended");
//           return false;
//         }
//       },
//     },
//   ])
// };

// const renderPosition = (position) => {
//   if (position === "Intern") {
//     console.log("Intern")
//     return "Intern";
//   } else if (position === "Engineer") {
//     console.log("Engineer")
//     return "Engineer";
//   } else if (position === "Manager") {
//     console.log("Mangager")
//     return "Manager"
//   } else {
//     return ""
//   }
// };

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
