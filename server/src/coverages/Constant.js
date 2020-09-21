const { Product } = require("./Product.js")
// Packages that do not change price nor sellIn
// Mega Coverage
class ConstantCoverage extends Product {
  constructor(name, price, sellIn) {
    super(name, price, sellIn)
    if(this.price !== 80) console.error('Improper price')
  }
  updateAttributes() {
    //This is reserved for further implementation
    return;
  }
}

module.exports = ConstantCoverage
