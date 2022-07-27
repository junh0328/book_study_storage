class Person {
  constructor(name, manager, chargeCode) {
    this.name = name;
    this.manager = manager;
    this.chargeCode = chargeCode;
  }

  get name() {
    return this.name;
  }
  get chargeCode() {
    return this.chargeCode;
  }

  set chargeCode(arg) {
    this.chargeCode = arg;
  }

  get manager() {
    return this.manager;
  }

  set manager(arg) {
    this.manager = arg;
  }
}

const person = new Person('Tom', 'aManager', '999');
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);

/**
 * 중개자 = 위임 = 컴포지션
 * A 클래스 내부에서 B 클래스를 가지고 있는 것
 * B라는 중개자를 통해서 A에서 원하는 정보를 얻는 형식
 */

/**
 * extract 추출해서 여러개의 클래스로 나눌 것인지
 * inline 제거해서 하나로 만들 것인지 고민해야 한다
 */
