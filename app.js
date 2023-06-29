const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

const outside = require('./generate_password.js')
//
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './views')

//使用靜態資料
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
})

//產生密碼route
app.get('/passwordGenerator', (req, res) => {
  const passwordLength = req.query.passwordLength
  const lowercase = req.query.lowercaseCharacters
  const uppercase = req.query.uppercaseCharacters
  const numbers = req.query.numbers
  const symbols = req.query.symbols
  const excludeCharacters = req.query.excludeCharacters
  const newPassword = outside.showinfo(passwordLength, lowercase, uppercase, numbers, symbols, excludeCharacters)
  res.render('index', { newPassword })
})


//啟動監聽
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})