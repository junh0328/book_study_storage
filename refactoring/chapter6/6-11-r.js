function priceOrder(product, quantity, shippingMethod) {
  const basePrice = calculateBasePrice(product, quantity);
  const discount = calcualteDiscountedPrice(product, quantity);
  const shippingCost = calculateShippingCost(
    basePrice,
    quantity,
    shippingMethod
  );

  return basePrice - discount + shippingCost;
}

function calculateBasePrice(product, quantity) {
  return product.basePrice * quantity;
}

function calcualteDiscountedPrice(product, quantity) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

function calculateShippingCost(basePrice, quantity, shippingMethod) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;

  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);

/**
 * 내가 생각한 리팩터링 방향
 * 1. 객체를 클래스로 만들어 내부 프로퍼티에 직접 접근하지 못 하도록 막기
 */

/**
 * 1. 주석으로 변수의 의도 파악하기
 * 2. 함수로 분리하기
 * 3. 불필요한 (임시변수) 리턴문 생략하기
 */
