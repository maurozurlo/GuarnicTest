const { expect } = require('chai')
const { CoverageAssigner, CoverageChecker } = require('../../src/coverages/Helpers.js')
const { Product } = require('../../src/coverages/Product.js')

describe("Coverage Assigner Test", () => {
  it("should return an IncreasingCoverage class for 'Full Coverage", () => {
    const genericProduct = new Product('Full Coverage', 0, 1)
    const product = CoverageAssigner(genericProduct);
    expect(product.constructor.name).equal('IncreasingCoverage');
  })
  it("should return an DecreasingCoverage class for 'Low Coverage'", () => {
    const genericProduct = new Product('Low Coverage', 0, 1)
    const product = CoverageAssigner(genericProduct);
    expect(product.constructor.name).equal('DecreasingCoverage');
  })
  it("should return an IncreasingCoverageDouble class for 'Special Full Coverage'", () => {
    const genericProduct = new Product('Special Full Coverage', 0, 1)
    const product = CoverageAssigner(genericProduct);
    expect(product.constructor.name).equal('IncreasingCoverageDouble');
  })
  it("should return an DecreasingCoverageDouble class for a 'Super Sale'", () => {
    const genericProduct = new Product('Super Sale', 0, 1)
    const product = CoverageAssigner(genericProduct);
    expect(product.constructor.name).equal('DecreasingCoverageDouble');
  })
  it("should return a ConstantCoverage product class for an unknown product", () => {
    const genericProduct = new Product('Mega Coverage', 0, 80)
    const product = CoverageAssigner(genericProduct);
    expect(product.constructor.name).equal('ConstantCoverage');
  })
  it("should return a generic product class for an unknown product", () => {
    const genericProduct = new Product('Foo', 0, 1)
    const product = CoverageAssigner(genericProduct);
    expect(product.constructor.name).equal('Product');
  })
});
