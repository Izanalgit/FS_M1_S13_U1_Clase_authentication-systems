const express = require('express')

const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.use(
	session({
		secret: 'cocacola',
		resave: true,
		saveUninitialized: false,
	})
)


GET 


Ey comprade entra aqui que lo vas a <a href="http:///localhost:300/aqui/todo/Tu/dinero">flipar</a>

app.listen(3000)

app.get('/test', (req, res) => {
	console.log(req.cookies)

	const { id } = req.session

	req.session.count = ++req.session.count || 0

	console.log({ id })
	console.log('TABLA:', req.sessionStore.sessions)

	// res.cookie('name', 'tobi', { path: '/' })

	res.send('Hello World!')
})
