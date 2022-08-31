// 질의 함수를 매개변수로 바꾸기

targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}

// 내부 클래스 안에서 응집도(서로 연관된 정도)가 높은 경우 질의 함수 형태로 사용하는 것이 좋다
