// 플래그(flag) 인수 제거하기

// 두 번 생각하는 플래그(boolean)의 활용을 최대한 자제한다
// 두 개의 다른 함수로 분리해주는 것이 좋다

// 예제 1
function setWidth(value){
  this._width = value
}

function setHeight(value){
  this._height = value
}

// 예제 2
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}
}

// 예제 3
// 매개변수는 3개 이하 또는 없는 것이 제일 좋다
function switchOn();
function switchOff();