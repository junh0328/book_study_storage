// 객체 통째로 넘기기
// 객체를 통째로 넘기는 것은 간편할 수 있으나, 객체에 대한 의존성을 가져도 괜찮은지 따져봐야 한다

export function temperatureAlerts(room, plan) {
  const alerts = [];
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push("room temperature went outside range");
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(range) {
    return (
      range.bottom >= this._temperatureRange.low &&
      range.top <= this._temperatureRange.high
    );
  }
}
