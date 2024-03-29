class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return this.priority.higherThan("normal");
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

console.log(orders);

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;

console.log(highPriorityCount);

// 캡슐화한 이후 Priority 클래스를 통해

// class Priority {
//   constructor(value) {
//     if (Priority.legalValues().includes(value)) {
//       this.value = value;
//     } else {
//       throw new Error(`${value} is invalid for Priority`);
//     }
//   }

//   get index() {
//     return Priority.legalValues().findIndex(this.value);
//   }

//   equals(other) {
//     return this.index === other.index;
//   }

//   higherThan(other) {
//     return this.index > other.index;
//   }

//   static legalValues() {
//     return ["low", "normal", "high", "rush"];
//   }
// }
