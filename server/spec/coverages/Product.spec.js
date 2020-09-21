const { expect } = require('chai')
const {Product, ExpiringProduct} = require('../../src/../src/coverages/Product.js')

describe("Product Test", () => {
  it("should return the price of the product", () => {
    const product = new Product('Full Coverage', 10, 45)
    expect(product.price).equal(45)
  })
  it("should have an updateAttributes method", () => {
    const product = new ExpiringProduct('Special Full Coverage', 10, 30)
    expect(product.updateAttributes).to.be.a('function');
  })
})
