const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

//
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.redirect('/passwordGenerator')
})

//產生密碼route
app.get('/passwordGenerator', (req, res) => {
  res.render('index')
})

//啟動監聽
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})