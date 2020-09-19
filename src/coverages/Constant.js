const { Product } = require("./Product.js")
// Packages that do not change price nor sellIn
// Mega Coverage
class constantCoverage extends Product {
  constructor(name, price, sellIn) {
    super(name, price, sellIn);
  }
  updateAttributes() {
    //This is a constant coverage
    return;
  }
}

module.exports = constantCoverage