const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
//外部函式
const outside = require('./generate_password.js')

//express可以讀取form
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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
app.post('/passwordGenerator', (req, res) => {
  //讀取form資料
  const formValues = req.body
  //使用外部函式產生password
  const newPassword = outside.showinfo(formValues)
  res.render('index', { newPassword, formValues })
})


//啟動監聽
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})