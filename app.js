const express = require('express')

const feedRoutes = require('../routes/feed.js')
const app = express

app.use('/feed', feedRoutes)

app.listen(8080);