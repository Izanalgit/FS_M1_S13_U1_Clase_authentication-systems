const express = require('express')

const bcrypt = require('bcrypt')

const app = express()

app.use(express.json())

const usersDB = {}

// async function hashPassword(passwordPlainText) {
// 	return crypto
// 		.createHash('sha1')
// 		.update(passwordPlainText)
// 		.digest('hex')
// }

app.post('/login', async (req, res) => {
	const { username, password: passwordPlainText } = req.body

	if (!usersDB[username])
		return res.status(400).send('Usuario o contraseña invalido')

	const isAuth = await bcrypt.compare(
		passwordPlainText,
		usersDB[username].password
	)

	if (!isAuth)
		return res.status(400).send('Usuario o contraseña invalido')

	res.send('BRAVOOO')
})

app.post('/register', async (req, res) => {
	const { username, password: passwordPlainText } = req.body

	if (usersDB[username])
		return res.status(400).send('Usuario o contraseña invalido')

	const salt = await bcrypt.genSalt(10)

	const password = await bcrypt.hash(passwordPlainText, salt)

	usersDB[username] = { username, password }

	console.log(usersDB)

	res.send('gracias por registrarte')
})

app.get('/ping', (req, res) => {
	res.send('pong')
})

app.listen(3000, () => console.log('Server is running on port 3000'))
