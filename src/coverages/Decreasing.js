const { ExpiringProduct } = require("./Product.js")
// Coverages that decrease their value and sellIn over time
// Low Coverage
// Medium Coverage
class DecreasingCoverage extends ExpiringProduct {
  constructor(name, price, sellIn) {
    super(name, price, sellIn);
  }

  updatePrice() {
    // Price decreases over time
    // If coverage is expired, it decreases at double speed
    const expiredMultiplier = this.sellIn >= 0 ? 1 : 2
    this.decreasePrice(expiredMultiplier)
  }

  decreasePrice(expiredMultiplier) {
    this.price -= 1 * expiredMultiplier;
  }
}
// Coverages that increase their value and sellIn at double speed
// Special Full Coverage
class DecreasingCoverageDouble extends DecreasingCoverage {
  constructor(name, price, sellIn) {
    super(name, price, sellIn);
  }

  updatePrice() {
    // If coverage is expired, it decreases at double speed
    const expiredMultiplier = this.sellIn >= 0 ? 2 : 4
    this.decreasePrice(expiredMultiplier)
  }
}

module.exports = {
  DecreasingCoverage,
  DecreasingCoverageDouble
}
