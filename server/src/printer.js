fs = require('fs');
const { Product } = require('./coverages/Product.js')
const { CarInsurance } = require('./coverages/coTest.js')

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
  fileContent += 'name, sellIn, price\n';
  if (i === 0) carInsurance.products.forEach(productPrinter)
  else {
    carInsurance.updatePrice().forEach(productPrinter);
  }
  fileContent += '\n'
}

fs.writeFile('30-days-test.txt', fileContent, function (err) {
  if (err) throw new Error("Error writing file");
  console.log("File saved successfuly")
});
