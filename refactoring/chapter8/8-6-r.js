/* 문장 슬라이드하기 */

// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;

// 예제 2
function someFunc() {
  const result =
    availableResources.length === 0
      ? (result = createResource())
      : (result = availableResources.pop());

  allocatedResources.push(result);
  return result;
}
