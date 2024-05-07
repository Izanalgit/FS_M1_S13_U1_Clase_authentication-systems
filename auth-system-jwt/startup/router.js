const express = require('express')

// const logger = require('../middleware/logger.js')

const morgan = require('morgan')

module.exports = function (app) {
	app.use(express.json())

	app.use(morgan('dev'))

	app.use('/api/tasks', require('../routes/tasks.js'))
	app.use('/api/users', require('../routes/users.js'))

	app.get('/ping', (req, res) => {
		res.json({ message: 'pong' })
	})
}
