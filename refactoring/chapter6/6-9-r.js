class Reading {
  #customer;
  #quantity;
  #month;
  #year;
  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  get customer() {
    return this.#customer;
  }

  get quantity() {
    return this.#quantity;
  }

  get month() {
    return this.#month;
  }

  get year() {
    return this.#year;
  }

  get baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  get baseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - 0.1 * this.taxThreshold);
  }
}

const reading = new Reading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

export function acquireReading() {
  return reading;
}

/**
 * private 으로 작성하는 이유는 생성된 객체를 변경하지 못하게 하기 위함이다
 */
