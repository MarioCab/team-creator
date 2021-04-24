const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const { generateHTML } = require("./generatehtml");

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
  inquirer
    .prompt([
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
      {
        type: "input",
        name: "managerTask",
        message: "What is the managers task?",
      },
    ])
    .then((answer) => {
      team.push(
        new Manager(
          answer.managerName,
          answer.managerId,
          answer.managerEmail,
          answer.managerTask,
          answer.managerOffice
        )
      );
      console.log(team);
      endQuestion();
    });
}

function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the engineer?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineers ID?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineers GitHub?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineers email?",
      },
      {
        type: "input",
        name: "engineerTask",
        message: "What is the engineers task?",
      },
    ])
    .then((answer) => {
      team.push(
        new Engineer(
          answer.engineerName,
          answer.engineerId,
          answer.engineerEmail,
          answer.engineerTask,
          answer.engineerGithub
        )
      );
      console.log(team);
      endQuestion();
    });
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of the intern?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the interns ID?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school did the intern go to?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern email?",
      },
      {
        type: "input",
        name: "internTask",
        message: "What is the interns task?",
      },
    ])
    .then((banana) => {
      team.push(
        new Intern(
          banana.internName,
          banana.internId,
          banana.internEmail,
          banana.internTask,
          banana.internSchool
        )
      );
      console.log(team);
      endQuestion();
    });
}

function endQuestion() {
  inquirer
    .prompt({
      type: "list",
      name: "addAnother",
      message: "Would you like to add anyone else to the team?",
      choices: ["yes", "No"],
    })
    .then((answer) => {
      if (answer.addAnother === "yes") {
        startQuestion();
      } else {
        console.log(generateHTML(team));
        fs.writeFileSync(outputPath, generateHTML(team), "utf-8");
      }
    });
}
