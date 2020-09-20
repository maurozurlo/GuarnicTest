const express = require('express');
const router = express.Router()

// @desc Index
// @route GET /
router.get('/', (req, res) => {
    res.send('Hello world')
})

module.exports = router
