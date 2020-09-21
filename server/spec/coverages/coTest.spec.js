const { expect } = require('chai')
const { Product } = require('../../src/coverages/Product')
const { CarInsurance } = require('../../src/coverages/coTest');

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new Product('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new Product('Mega Coverage', 0, 80),
  new Product('Mega Coverage', -1, 80),
  new Product('Special Full Coverage', 15, 20),
  new Product('Special Full Coverage', 10, 49),
  new Product('Special Full Coverage', 5, 49),
  new Product('Super Sale', 3, 6)
];

describe("Co Test", () => {
  let InstanceCarInsurance;

  beforeEach(() => {
    InstanceCarInsurance = new CarInsurance(productsAtDayZero);
  })
  it("should update price accordingly for Low Coverage", () => {
    for (let i = 0; i <= 3; i++) {
      InstanceCarInsurance.updatePrice()
    }

    const productsAtDayFour = InstanceCarInsurance.products
    expect(productsAtDayFour[2].price).equal(3);
  });
  it("should update price accordingly for Medium Coverage", () => {
    const productsAtDayOne = InstanceCarInsurance.updatePrice()
    expect(productsAtDayOne[0].price).equal(19);
  })
  it("should update price accordingly for Full Coverage", () => {
    for (let i = 0; i <= 14; i++) {
      InstanceCarInsurance.updatePrice()
    }
    const productsAtDayFifteen = InstanceCarInsurance.products
    expect(productsAtDayFifteen[1].price).equal(28);
  })
  it("should keep price constant for Mega Coverage", () => {
    for (let i = 0; i <= 30; i++) {
      InstanceCarInsurance.updatePrice()
    }
    const productsAtDayFifteen = InstanceCarInsurance.products
    expect(productsAtDayFifteen[3].price).equal(80);
  })
  it("should update price accordingly for Special Full Coverage", () => {
    for (let i = 0; i <= 14; i++) {
      InstanceCarInsurance.updatePrice()
    }
    const productsAtDayFifteen = InstanceCarInsurance.products
    expect(productsAtDayFifteen[5].price).equal(50);
  })
  it("should update price accordingly for Super Sale", () => {
    for (let i = 0; i <= 1; i++) {
      InstanceCarInsurance.updatePrice()
    }
    const productsAtDayTwo = InstanceCarInsurance.products
    expect(productsAtDayTwo[8].price).equal(2);
  })
});
