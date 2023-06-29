const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('/passwordGenerator')
})

//產生密碼route
app.get('/passwordGenerator', (req, res) => {
  res.send('generate password')
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})