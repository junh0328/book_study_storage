/* 파생 변수를 질의 함수로 바꾸기 */

// 예제 1
class Order {
  // 다른 코드 있다고 가정
  /**
   * get 하는 순간 필요한 정보가 갱신 되도록
   */
  get discountedTotal() {
    return this._basePrice - this.discount;
  }
  set discount(value) {
    const old = this._discount;
    this._discount = value;
    this._discountedTotal += old - value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정

  /**
   * get 하는 순간 필요한 정보가 갱신 되도록
   */

  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}
