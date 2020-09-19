fs = require('fs');

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}
// Coverages
// Low
// Medium
// Full
// Mega
// Special Full
// Super Sale

// Coverages that decrease their value and sellIn over time
// Low Coverage
// Medium Coverage
class DecreasingCoverage extends Product {
  constructor(name, price, sellIn) {
    super(name, price, sellIn);
  }
  updateAttributes() {
    // Sell in always decreases
    this.sellIn--;
    // Price decreases over time
    // If coverage is expired, it decreases at double speed
    const expiredMultiplier = this.sellIn >= 0 ? 1 : 2
    this.price > 0 ? this.price -= 1 * expiredMultiplier : this.price = 0
  }
}
// Packages that increase their value and sellIn over time
// Full Coverage
class IncreasingCoverage extends Product {
  constructor(name, price, sellIn) {
    super(name, price, sellIn);
    this.maxSellingPrice = 50
  }
  updateAttributes() {
    this.sellIn--;
    // Price increases over time
    // If coverage is expired, it increases at double speed
    const expiredMultiplier = this.sellIn <= 10 ? 2 : 1
    this.price < this.maxSellingPrice ? this.price += 1 * expiredMultiplier : this.price = this.maxSellingPrice
  }
}
// Packages that increase their value and sellIn at double speed
// Special Full Coverage
class IncreasingCoverageDouble extends IncreasingCoverage {
  constructor(name, price, sellIn, maxSellingPrice) {
    super(name, price, sellIn, maxSellingPrice)
  }
  updateAttributes() {
    this.sellIn--;
    // Price drops to 0 if coverage is expired
    if (this.sellIn <= 0) { this.price = 0; return };
    // Else, coverage price increases
    let expiredMultiplier = 1;
    if (this.sellIn < 10) expiredMultiplier = 2
    if (this.sellIn < 5) expiredMultiplier = 3
    this.price < this.maxSellingPrice ? this.price += 1 * expiredMultiplier : this.price = this.maxSellingPrice
  }
}

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

const CoverageAssigner = (coverage) => {
  switch (coverage.name) {
    case "Low Coverage":
    case "Medium Coverage":
      return new DecreasingCoverage(coverage.name, coverage.sellIn, coverage.price)
    case "Full Coverage":
      return new IncreasingCoverage(coverage.name, coverage.sellIn, coverage.price)
    case "Mega Coverage":
      return new constantCoverage(coverage.name, coverage.sellIn, coverage.price)
    case "Special Full Coverage":
      return new IncreasingCoverageDouble(coverage.name, coverage.sellIn, coverage.price, IncreasingCoverage.maxSellingPrice)
    case "Super Sale":
      // Not yet implemented
      return coverage
    default:
      throw new Error("Received unknown product")
  }
}

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

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new Product('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new Product('Mega Coverage', 0, 80),
  new Product('Mega Coverage', -1, 80),
  new Product('Special Full Coverage', 15, 20),
  new Product('Special Full Coverage', 10, 49),
  new Product('Special Full Coverage', 5, 49),
  new Product('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
let fileContent = 'OMGHAI!\n';
const productPrinter = function (product) {
  fileContent += `${product.name}, ${product.sellIn}, ${product.price}\n`;
};

for (let i = 0; i <= 30; i += 1) {
  fileContent += `-------- day ${i} --------\n`;
  fileContent += 'name, sellIn, price \n';
  if (i === 0) carInsurance.products.forEach(productPrinter)
  else {
    carInsurance.updatePrice().forEach(productPrinter);
  }
  fileContent += ' \n'
}

fs.writeFile('30-days-test.txt', fileContent, function (err) {
  if (err) throw new Error("Error writing file");
  console.log("File saved successfuly")
});

module.exports = {
  Product,
  CarInsurance
}
