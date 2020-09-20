const express = require('express');
const { Product } = require('../coverages/Product.js')
const { CarInsurance } = require('../coverages/coTest.js');
const router = express.Router()

// @desc Index
// @route GET /
router.get('/', (req, res) => {
    res.send('Hello world')
})

// @desc GetTestData
// @route GET /test-data
router.get('/test-data', (req, res) => {
    // Sample Product Array
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
    let response = []
    // Return product object
    const productPrinter = (product) => {
        return {
            name: product.name,
            sellIn: product.sellIn,
            price: product.price
        }
    }
    // Loop through all days and add them to the response
    for (let i = 0; i <= 30; i += 1) {
        let day = []
        if (i === 0){
            carInsurance.products.forEach(product => day.push(productPrinter(product)))
        }
        else {
            carInsurance.updatePrice().forEach(product => day.push(productPrinter(product)));
        }
        response.push(day)
    }

    res.json(response)
})


module.exports = router
