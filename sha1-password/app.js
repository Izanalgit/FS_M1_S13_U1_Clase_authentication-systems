const express = require('express')

const crypto = require('crypto')

const app = express()

app.use(express.json())

const usersDB = {}

app.post('/register', (req, res) => {
	const { username, password: passwordPlainText } = req.body

	if (usersDB[username])
		return res.send('Usuario o contraseña invalido')

	const password = crypto
		.createHash('sha1')
		.update(passwordPlainText)
		.digest('hex')

	usersDB[username] = { username, password }

	console.log(usersDB)

	res.send('gracias por registrarte')
})

app.get('/ping', (req, res) => {
	res.send('pong')
})

app.listen(3000, () => console.log('Server is running on port 3000'))
