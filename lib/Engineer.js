const employee = require("./Employee");
const intern = require("./Intern");

class engineer extends employee {
  constructor(name, id, email, githubName) {
    super(name, id, email);
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

module.exports = intern;
