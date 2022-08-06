class Customer {
  constructor(name, discountRate) {
    this.name = name;
    this.contract = new CustomerContract(this.dateToday(), discountRate);
  }

  becomePreferred() {
    this.contract.discountRate += 0.03;
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.contract.discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this.startDate = startDate;
    this.discountRate = discountRate;
  }

  get discountRate() {
    return this.discountRate;
  }

  set discountRate(value) {
    this.discountRate = value;
  }
}
