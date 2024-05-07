const express = require('express')

const app = express()

require('./startup/router')(app)

app.listen(3000, () => console.log('Server on...'))
