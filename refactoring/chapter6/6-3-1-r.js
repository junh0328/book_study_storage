function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shopping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

  return basePrice - discount + shopping;
}
