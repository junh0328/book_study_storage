// 오류 코드를 예외로 바꾸기
// 에러를 명확하게 던져주기

function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super();
    this.errorCode = errorCode;
  }
}

try {
  const result = localShippingRules();
} catch (error) {
  if (error instanceof OrderProcessingError) {
    console.log("- error occured:", error);
  }
}
