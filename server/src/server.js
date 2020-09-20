const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()

// Routes
app.use('/api', require('./routes/index'))

const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  )
