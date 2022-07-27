class Person {
  constructor(name) {
    this.name = name;
    this.courses = [];
  }

  get name() {
    return this.name;
  }

  get courses() {
    return [...this.courses];
  }

  addCourse(course) {
    this.courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }

    this.courses.splice(index, 1);
  }
}

class Course {
  constructor(name, isAdvanced) {
    this.name = name;
    this.isAdvanced = isAdvanced;
  }

  get name() {
    return this.name;
  }

  get isAdvanced() {
    return this.isAdvanced;
  }
}

const junhee = new Person('준희');
const course = new Course('래팩터링', true);
junhee.addCourse(course);
console.log(junhee.courses.length);
junhee.removeCourse(course, () => {
  console.log('해당 코스는 없다');
});
console.log(junhee.courses.length);
junhee.removeCourse(course, () => {
  console.log('해당 코스는 없다');
});

/**
 * 외부에서 course를 업데이트하고 있는 상황
 */
