## Inicializar servidor con express

1. Inicializar proyecto de node

```bash
npm init -y
```

2. Instalar express

```bash
npm i express
```

3. Boilerplate

```javascript
const express = require('express')

const app = express()

app.get('/ping', (req, res) => {
	res.json({ message: 'pong' })
})

app.listen(3000, () => console.log('Server on'))
```
