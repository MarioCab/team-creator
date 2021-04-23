const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const { type } = require("os");

let team = [];

function startQuestion() {
  inquirer
    .prompt({
      type: "list",
      name: "employeeType",
      message: "What kind of employee would you like to add?",
      choices: ["Manager", "Engineer", "Intern"],
    })
    .then((answer) => {
      console.log(answer);
      if (answer.employeeType === "Manager") {
        managerQuestions();
      } else if (answer.employeeType === "Engineer") {
        engineerQuestions();
      } else if (answer.employeeType === "Intern") {
        internQuestions();
      }
    });
}

startQuestion();

function managerQuestions() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the name of the manager?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the managers ID?",
    },
    {
      type: "input",
      name: "managerOffice",
      message: "What is the managers office number?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the managers email?",
    },
  ]);
}
