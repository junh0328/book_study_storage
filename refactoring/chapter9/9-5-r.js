/* 값을 참조로 바꾸기 */

const CustomerRepository = new CustomElementRegistry();

const order = new Order(
  data.number,
  CustomerRepository.registerCustomer(data.customerId)
);

class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

class CustomElementRegistry {
  constructor() {
    this.customer = new Map();
  }

  registerCustomer(id) {
    if (!this.customer.has(id)) {
      this.customer.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.customer.get(id);
  }
}
