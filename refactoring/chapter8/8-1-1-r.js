/**
 * 순수하게 함수로만 구성된 로직
 *
 * trackSummary 라는 함수가 다른 내부 함수를 감싼 형태였지만,
 * 실질적으로 응집도(서로를 필요로 하는 정도)가 떨어졌다.
 *
 */

function trackSummary(points) {
  const time = calculateTime();
  const distance = calculateDistance(points);
  const pace = time / 60 / distance;

  return { time, distance, pace };
}
function calculateTime() {
  return 10000;
}

function calculateDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function distance(p1, p2) {
  // 포뮬라: http://www.movable-type.co.uk/scripts/latlong.html
  const EARTH_RADIUS = 3959; // in miles
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) *
      Math.cos(radians(p1.lat)) *
      Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

const newYork = {
  lat: 40.73061,
  lon: -73.935242,
};

const tokyo = {
  lat: 35.652832,
  lon: 139.839478,
};

const summary = trackSummary([newYork, tokyo]);
console.log(summary);
