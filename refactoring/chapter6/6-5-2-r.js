export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}

/**
 * isPriority 는 불리언 값을 받아, 함수 내에서 우선순위가 높을 경우 추가적으로 다른 작업을 하는 매개변수를 나타낸다
 * addReservation 내의 파라미터를 추가하는 경우이므로 이전 값에 영향을 주지 않게하기 위해 isPriority 의 초기값을 false 로 준다
 */
