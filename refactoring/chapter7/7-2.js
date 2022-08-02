class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  get courses() {
    return this._courses;
  }

  set courses(courses) {
    this._courses = courses;
  }
}

class Course {
  _name;
  _isAdvanced;
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
}

const ellie = new Person("준희");
ellie.courses.push(new Course("리팩토링", true));
console.log(ellie.courses.length);

/**
 * 외부에서 course를 업데이트하고 있는 상황
 */
