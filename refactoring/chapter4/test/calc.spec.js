// calc.spec.js
const assert = require("assert");
import calc from "../calc";

describe("testing calc.add, cal.mul", () => {
  it("should be seven", () => {
    const seven = calc.add(3, 4);
    assert.equal(7, seven);
  });

  it("should be eight", () => {
    const eight = calc.add(3, 5);
    assert.equal(8, eight);
  });
});
