// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express')

const app = express()
const porta = 3001

app.use(express.static(__dirname + '/dist/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname) + '/dist/index.html'
})

app.listen(porta, () =>
  console.log(`Servido rodando com express na porta: ${porta}`)
)
