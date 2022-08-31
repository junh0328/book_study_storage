// 질의 함수와 변경 함수 분리하기

/**
 * TODO: side effect(부수 효과) 없는 함수를 만들어야 한다
 */

// 예제 1
function totalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  sendBill();
}

// 예제 2

/**
 * 반복문을 돌며 로직을 바로 처리하는 것이 아닌,
 * 특정 값을 찾아와서 해당 변수를 매개변수로 전달하는 로직으로 변경해보자
 */
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

function setOffAlarms(alarm, p) {
  alarm.setOff("Found Miscreant " + p);
}
