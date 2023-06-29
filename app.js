const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

//
app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library
// or
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies using qs library

//使用靜態資料
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/passwordGenerator')
})

//產生密碼route
app.get('/passwordGenerator', (req, res) => {
  //console.log(req.body)
  res.render('index')
})



//啟動監聽
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})