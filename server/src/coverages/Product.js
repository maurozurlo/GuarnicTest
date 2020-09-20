// Base class for all coverages
// Low
// Medium
// Full
// Mega
// Special Full
// Super Sale
class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
}

class ExpiringProduct extends Product {
    constructor(name, sellIn, price) {
        super(name, sellIn, price)
    }

    updateAttributes() {
        this.sellIn--
        this.updatePrice()
        this.clamp()
    }

    clamp() {
        // After the update we cap the price values to a minimum of 0 and a max of 50
        this.price = Math.max(0, Math.min(this.price, 50))
    }

    updatePrice() {
        return;
    }
}

module.exports = {
    Product, ExpiringProduct
}
