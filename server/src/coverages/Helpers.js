const ConstantCoverage = require('./Constant');
const { DecreasingCoverage, DecreasingCoverageDouble } = require('./Decreasing')
const { IncreasingCoverage, IncreasingCoverageDouble } = require('./Increasing')

const CoverageAssigner = (coverage) => {
    switch (coverage.name) {
        case "Low Coverage":
        case "Medium Coverage":
            return new DecreasingCoverage(coverage.name, coverage.sellIn, coverage.price)
        case "Full Coverage":
            return new IncreasingCoverage(coverage.name, coverage.sellIn, coverage.price)
        case "Mega Coverage":
            return new ConstantCoverage(coverage.name, coverage.sellIn, coverage.price)
        case "Special Full Coverage":
            return new IncreasingCoverageDouble(coverage.name, coverage.sellIn, coverage.price)
        case "Super Sale":
            return new DecreasingCoverageDouble(coverage.name, coverage.sellIn, coverage.price)
        default:
            // This currently returns the default product, since the name was not recognized
            console.error('Received unknown product')
            return coverage
    }
}

module.exports = CoverageAssigner
