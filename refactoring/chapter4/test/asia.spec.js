const { expect } = require("chai");
const { Province, sampleProvinceData } = require("../sample");

describe("province", function () {
  let asia;
  this.beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  it("shortfall", function () {
    // expect(asia.shortfall, 5);
    expect(asia.shortfall).equal(5);
  });

  it("profit", function () {
    expect(asia.profit).equal(230);
  });

  it("change production", function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  });

  it("zero demand", function () {
    // 수요가 없다
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  });

  it("negative demand", () => {
    // 수요가 마이너스
    asia.demand = -1;
    expect(asia.shortfall).equal(-26);
    expect(asia.profit).equal(-10);
  });

  it("empty string demand", () => {
    // 수요 입력란이 비어있을 때 - UI 로부터 문자열을 취하고 있을 때, 필드가 비어 있을 수 있음
    asia.demand = "";
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});

describe("no producers", function () {
  // 생산자가 없다.
  let noProducers;
  this.beforeEach(function () {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it("shortfall", function () {
    expect(noProducers.shortfall).equal(30);
  });

  it("profit", function () {
    expect(noProducers.profit).equal(0);
  });
});

describe("string for producers", () => {
  it("", () => {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfall).equal(0);
  });
});
