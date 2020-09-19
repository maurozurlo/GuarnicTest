const { ExpiringProduct } = require("./Product.js")
// Coverages that increase their value and sellIn over time
// Full Coverage
class IncreasingCoverage extends ExpiringProduct {
  constructor(name, price, sellIn) {
    super(name, price, sellIn);
  }

  updatePrice() {
    // Price increases over time
    // If coverage is expired, it increases at double speed
    const expiredMultiplier = this.sellIn < 0 ? 2 : 1
    this.increasePrice(expiredMultiplier)
  }

  increasePrice(expiredMultiplier) {
    this.price += 1 * expiredMultiplier
  }
}
// Coverages that increase their value and sellIn at double speed
// Special Full Coverage
class IncreasingCoverageDouble extends IncreasingCoverage {
  constructor(name, price, sellIn, maxSellingPrice) {
    super(name, price, sellIn, maxSellingPrice)
  }
  updatePrice() {
    // Price drops to 0 if coverage is expired
    if (this.sellIn < 0) { this.price = 0; return };
    // Else, coverage price increases at variable multiplier
    let expiredMultiplier = 1;
    if (this.sellIn < 10) expiredMultiplier = 2
    if (this.sellIn < 5) expiredMultiplier = 3
    this.increasePrice(expiredMultiplier)
  }
}

module.exports = {
  IncreasingCoverage,
  IncreasingCoverageDouble
}