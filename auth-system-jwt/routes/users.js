const express = require('express')
const bcrypt = require('bcrypt')

const auth = require('../middleware/auth')

const jwt = require('jsonwebtoken')

const router = express.Router()

const usersDB = {}

async function generateJWT(payload) {
	return await jwt.sign(payload, 'cocacola')
}

router.post('/login', async (req, res) => {
	const { username, password: passwordPlainText } = req.body

	if (!usersDB[username])
		return res.status(400).send('Usuario o contraseña invalido')

	const isAuth = await bcrypt.compare(
		passwordPlainText,
		usersDB[username].password
	)

	if (!isAuth)
		return res.status(400).send('Usuario o contraseña invalido')

	const token = await generateJWT({ username })

	res.setHeader('x-auth-token', token)
	res.send('BRAVOOO')
})

router.post('/register', async (req, res) => {
	const { username, password: passwordPlainText } = req.body

	if (usersDB[username])
		return res.status(400).send('Usuario o contraseña invalido')

	const salt = await bcrypt.genSalt(10)

	const password = await bcrypt.hash(passwordPlainText, salt)

	usersDB[username] = { username, password }

	const token = await generateJWT({ username })

	res.setHeader('x-auth-token', token)

	// Expide un token

	res.send('gracias por registrarte')
})

router.get('/profile', auth, (req, res) => {
	console.log(req.user)

	res.send('BRAVOOO')
})

module.exports = router
