const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

/**
 * 요즘은 클래스로 묶는 방식을 더 선호한다
 * 변환 함수로 만드는 작업은 이전에 많이 사용된 방식
 */
