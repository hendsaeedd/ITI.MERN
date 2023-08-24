const express = require('express')
const app = express()
const port = 4000

//encode url
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const arr = [
  { name: 'product1', price: 1000 },
  { name: 'product2', price: 2000 },
  { name: 'product3', price: 3000 }
]

app.get('/products', (req, res) => {
  res.send(arr)
})

app.delete('/products/:id', (req, res) => {
  const id = req.params.id
  if (isFinite(id) && id < arr.length) {
    arr.splice(id, 1)
    res.send(arr)
  }
  else {
    res.send('id is not a number')
  }
})

//update product according to index product /:id
app.put('/products/:id', (req, res) => {
  const id = req.params.id
  if (isFinite(id) && id < arr.length) {
    arr[id].name = req.body.name
    arr[id].price = req.body.price
    res.send(arr)
  }
  else {
    res.send('id is not a number')
  }
})




app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
















// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   console.log(req.url)

//   if (req.url === '/') {
//     const html = fs.readFileSync('main.html', 'utf8')
//     res.write(html)
//     res.end()
//   }
//   else if (req.url === '/style.css') {
//     const css = fs.readFileSync('style.css', 'utf8')
//     res.write(css)
//     res.end()
//   }
//   else if (req.url === '/about') {
//     res.write('Welcome to about page')
//     res.end()
//   }
//   else {
//     res.write('404')
//     res.end()
//   }
// })

// server.listen(4000, () => {
//   console.log('Server is running on port 4000')
// })