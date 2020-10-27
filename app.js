// app.js
const express = require('express')
const app = express()
const port = 3000

//design middleware
app.use(function (req, res, next) {
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth()
  let day = today.getDate()
  let hour = today.getHours()
  let minute = today.getMinutes()
  let second = today.getSeconds()
  console.log(`${year}-${month}-${day} ${hour}:${minute}:${second} | ${req.method} from ${req.originalUrl}`)
  next()
})

//set routes
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
