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
    // If coverage is expired, price decreases at double speed
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
    // If coverage is expired, price increases at double speed
    const expiredMultiplier = this.sellIn >= 0 ? 1 : 2
    this.price <= this.maxSellingPrice ? this.price += 1 * expiredMultiplier : this.price = this.maxSellingPrice
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      let coverage;
      switch (this.products[i].name) {
        case "Low Coverage":
        case "Medium Coverage":
          coverage = new DecreasingCoverage(this.products[i].name, 
            this.products[i].sellIn, this.products[i].price)
          break;
        case "Full Coverage":
          coverage = new IncreasingCoverage(this.products[i].name, 
            this.products[i].sellIn, this.products[i].price)
          break;
        case "Mega Coverage":
          // Not yet implemented
          break;
        case "Special Full Coverage":
          // Not yet implemented
          break;
        case "Super Sale":
          // Not yet implemented
          break;
        default:
          console.log("Unkown Product");
          break;
      }
      if(coverage !== undefined){
        coverage.updateAttributes();
        this.products[i] = coverage;
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
const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}

module.exports = {
  Product,
  CarInsurance
}
