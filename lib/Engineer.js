const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, task, githubName) {
    super(name, id, email, task);
    this.githubName = githubName;
    this.role = "Engineer";
  }
  getgithubName() {
    return this.githubName;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
