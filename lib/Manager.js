const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, task, officeNumber) {
    super(name, id, email, task);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  getOfficeNumber() {
    return this.OfficeNumber;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;
