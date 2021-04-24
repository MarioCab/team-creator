class employee {
  constructor(name, id, email, task) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.task = task;
    this.role = "Employee";
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
  getTask() {
    return this.task;
  }
}

module.exports = employee;

// const rob = new employee("Robert Cabrera", 324, "rob.com");
// const mario = new employee("Mario Cabrera", 322, "mariocab.com");

// console.log(mario);
// console.log(rob);

// mario.getEmail();
// mario.getName();
