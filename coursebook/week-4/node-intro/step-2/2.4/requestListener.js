const fs = require('fs')
const path = require('path')

const requestListener = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const file = path.join('2.4', 'public', 'index.html')

    // we have two requests that we need to handle (css and frontend js logic)
    // we can see the proper endpoint from the browser's network tab.
    fs.readFile(file, (err, data) => {
      if (err) console.log(err)
      else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      }
    })
  } else if (req.url === '/public/index.css' && req.method === 'GET') {
    const file = path.join('2.4', 'public', 'index.css')

    // we have two requests that we need to handle (css and frontend js logic)
    fs.readFile(file, (err, data) => {
      if (err) console.log(err)
      else {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.end(data)
      }
    })
  } else if (req.url === '/public/index.js' && req.method === 'GET') {
    const file = path.join('2.4', 'public', 'index.js')

    // we have two requests that we need to handle (css and frontend js logic)
    fs.readFile(file, (err, data) => {
      if (err) console.log(err)
      else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
        res.end(data)
      }
    })
  }
}

module.exports = requestListener;
