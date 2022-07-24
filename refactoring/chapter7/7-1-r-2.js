// 객체 리터럴을 이용한 레코드, organization
/**
 * 한번 만든 객체(organization)을 불변하게 유지하고 싶지만, 객체는 mutable한 성질을 가지고 있기 때문에 쉽지 않다
 */

class Organization {
  #name;
  #country;
  constructor(name, country) {
    this.#name = name;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    return (this.#name = value);
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    return (this.#country = value);
  }
}

const organization = new Organization("Acme Gooseberries", "GB");

console.log(organization.name);
console.log(organization.country);
