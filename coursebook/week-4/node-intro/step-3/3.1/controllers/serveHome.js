const fs = require('fs')
const path = require('path')

// 1- copy the logic of the html route
exports.serveHtml = (req, res) => {
  const file = path.join('3.1', 'public', 'index.html')
  fs.readFile(file, (err, data) => {
    if (err) console.log(err)
    else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    }
  })
}

// 2- copy the logic of the css route
exports.serveCSS = (req, res) => {
  const file = path.join('3.1', 'public', 'index.css')
  fs.readFile(file, (err, data) => {
    if (err) console.log(err)
    else {
      res.writeHead(200, { 'Content-Type': 'text/css' })
      res.end(data)
    }
  })
}

// 3- copy he servejs logic here
exports.serveJS = (req, res) => {
  const file = path.join('3.1', 'public', 'index.js')
  fs.readFile(file, (err, data) => {
    if (err) console.log(err)
    else {
      res.writeHead(200, { 'Content-Type': 'application/javascript' })
      res.end(data)
    }
  })
}
