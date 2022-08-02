class Person {
  constructor(name, department) {
    this._name = name;
    this._department = department;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  set department(arg) {
    this._department = arg;
  }
}

class Department {
  _manager;
  _chargeCode;
  constructor(manager, chargeCode) {
    this._manager = manager;
    this._chargeCode = chargeCode;
  }

  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(arg) {
    this._chargeCode = arg;
  }

  get manager() {
    return this._manager;
  }

  set manager(arg) {
    this._manager = arg;
  }
}

const person = new Person("Tom", new Department("aManager", "999"));
console.log(person.name);
console.log(person.department.manager);
console.log(person.department.chargeCode);
