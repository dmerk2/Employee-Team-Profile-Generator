const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "employee-ID",
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "number",
      message: "What is your office number?",
    },
    {
      type: "list",
      name: "position",
      message: "Are you an enginerr or intern?",
      // Create choices of which license to use
      choices: ["Employee", "Intern"],
    },
  ]);
};

// TODO: Create a function to initialize app
const init = () => {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    // .then((data) => fs.writeFileSync("index.html", generateHTML(data)))
    // If it was successful console log Successfully wrote to README.md
    .then(() => console.log("Successfully Added Employee"))
    .catch((err) => console.error("error", err));
};

// Function call to initialize app
init();
