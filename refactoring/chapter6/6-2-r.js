function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

function reportLines(customer) {
  const lines = [];
  lines.push(["name", customer.name]);
  lines.push(["location", customer.location]);
  return lines;
}

/**
 * 리팩터링은 extract (추출하기) 와 inline(인라인하기) 의 반복이다
 */
