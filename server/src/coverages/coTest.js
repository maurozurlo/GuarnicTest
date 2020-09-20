const CoverageAssigner = require('./Helpers.js')

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      this.products[i] = CoverageAssigner(this.products[i])
      if (typeof this.products[i].updateAttributes !== "undefined") {
        this.products[i].updateAttributes();
      }
    }
    return this.products;
  }
}

module.exports = {
  CarInsurance
}
