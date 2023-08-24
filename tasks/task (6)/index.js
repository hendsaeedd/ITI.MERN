const fs = require('fs')

// console.log('hello world')

const students = [
  'hend',
  'mohamed',
  'ahmed'
]

fs.writeFile('students.txt', students.join('\n'), (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

fs.appendFile('students.txt', '\nali', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

const htmlFile = fs.readFileSync('./main.html', 'utf8')

console.log(htmlFile)

// fs.readFile('test.txt', 'hiiiiiii', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// const data = fs.readFileSync('test.txt', 'utf8')
// console.log(data)