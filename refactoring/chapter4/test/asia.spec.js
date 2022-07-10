const { expect } = require("chai");
const { Province, sampleProvinceData } = require("../sample");

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    // expect(asia.shortfall, 5);
    expect(asia.shortfall).equal(5);
  });

  it("profit", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).equal(230);
  });
});
