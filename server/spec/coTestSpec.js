const { expect } = require('chai')
const { Product } = require('../src/coverages/Product');
const { CarInsurance } = require('../src/coverages/coTest');
const CoverageAssigner = require('../src/coverages/Helpers.js')

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new Product('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new Product('Mega Coverage', 0, 80),
  new Product('Mega Coverage', -1, 80),
  new Product('Special Full Coverage', 15, 20),
  new Product('Special Full Coverage', 10, 49),
  new Product('Special Full Coverage', 5, 49),
  new Product('Super Sale', 3, 6),
  new Product('Foo', 3, 6),
];

describe("Co Test", function () {
  it("should update price accordingly for Medium Coverage", function () {
    const product = CoverageAssigner(productsAtDayZero[0]);
    product.updateAttributes()
    expect(product.price).equal(19);
  });
  it("should update price accordingly for Full Coverage", function () {
    const product = CoverageAssigner(productsAtDayZero[1]);
    product.updateAttributes()
    expect(product.price).equal(1);
  });
  it("should be constant price, since it's an unknown product", function () {
    const product = CoverageAssigner(productsAtDayZero[9]);
    product.updateAttributes && product.updateAttributes()
    expect(product.price).equal(6);
  });
});
