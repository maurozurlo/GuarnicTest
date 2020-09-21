const { expect } = require('chai')
const ConstantCoverage = require('../../src/../src/coverages/Constant.js')

describe("Constant Coverage Test", () => {
  it("should return the same sellIn and price values", () => {
    const megaCoverage = new ConstantCoverage('Mega Coverage', 0, 80)
    megaCoverage.updateAttributes()
    expect(megaCoverage.price).equal(80)
  })
})
