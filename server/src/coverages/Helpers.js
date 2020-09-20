const constantCoverage = require('./Constant');
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
            return new constantCoverage(coverage.name, coverage.sellIn, coverage.price)
        case "Special Full Coverage":
            return new IncreasingCoverageDouble(coverage.name, coverage.sellIn, coverage.price)
        case "Super Sale":
            return new DecreasingCoverageDouble(coverage.name, coverage.sellIn, coverage.price)
        default:
            throw new Error("Received unknown product")
    }
}

module.exports = CoverageAssigner
