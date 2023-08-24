const express = require('express')
const app = express()
const port = 5000

//encode url
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

app.get('/welcome', (req, res) => {
  res.sendFile(__dirname + '/welcome.html')
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html')
})

app.post('/login', (req, res) => {
  const username = req.body.username
  res.send(`Welcome! ${username}`)
})