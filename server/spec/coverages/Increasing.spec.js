const { expect } = require('chai')
const {IncreasingCoverage, IncreasingCoverageDouble} = require('../../src/../src/coverages/Increasing.js')

describe("Increasing Coverage Test", () => {
  it("should return a higher price after time passes", () => {
    const product = new IncreasingCoverage('Full Coverage', 10, 45)
    product.updateAttributes()
    expect(product.price).equal(46)
  })
  it("should return a higher price x2 after time passes", () => {
    const product = new IncreasingCoverageDouble('Special Full Coverage', 10, 45)
    product.updateAttributes()
    expect(product.price).equal(47)
  })
})
