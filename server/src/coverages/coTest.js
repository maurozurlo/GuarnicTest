const { CoverageChecker, CoverageAssigner } = require('./Helpers.js')

class CarInsurance {
  constructor(products = []) {
    this.products = products.map(CoverageAssigner)
  }
  updatePrice() {
    this.products.forEach(product => product.updateAttributes && product.updateAttributes())
    return this.products
  }
}

module.exports = {
  CarInsurance
}
