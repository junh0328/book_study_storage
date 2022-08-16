/* 참조를 값으로 바꾸기 */
/**
 * 참조 reference (가변성) (객체타입)
 * 값 value (불변성) (원시타입)
 */

class Person {
  constructor(name, areaCode, number) {
    this.name = name;
    this.telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.name;
  }

  set name(arg) {
    this.name = arg;
  }

  get telephoneNumber() {
    return this.telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    this.telephoneNumber = new TelephoneNumber(value, this.officeNumber);
  }

  get officeNumber() {
    return this.telephoneNumber.number;
  }

  set officeNumber(value) {
    this.telephoneNumber.number = new TelephoneNumber(
      this.officeAreaCode,
      value
    );
  }
}

class TelephoneNumber {
  constructor(area, number) {
    this.areaCode = area;
    this.number = number;
  }

  get areaCode() {
    return this.areaCode;
  }
  set areaCode(arg) {
    this.areaCode = arg;
  }

  get number() {
    return this.number;
  }

  get toString() {
    return `(${this.areaCode}) ${this.number}`;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
