class Employee {
  constructor(name, id, email, office, getRole){
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office;
    this.getRole = getRole;
  }
  getName(){
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail(){
    return this.email;
  }
  getOfficeNumber() {
    return this.office;
  }
  getRole(){
    return "Manager";
  }
};

module.exports = Employee;