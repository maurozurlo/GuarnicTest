const { expect } = require('chai')
const {DecreasingCoverage, DecreasingCoverageDouble} = require('../../src/../src/coverages/Decreasing.js')

describe("Decreasing Coverage Test", () => {
  it("should return a lower price after time passes", () => {
    const product = new DecreasingCoverage('Low Coverage', 10, 45)
    product.updateAttributes()
    expect(product.price).equal(44)
  })
  it("should return a lower price x2 after time passes", () => {
    const product = new DecreasingCoverageDouble('Super Sale', 10, 45)
    product.updateAttributes()
    expect(product.price).equal(43)
  })
})
