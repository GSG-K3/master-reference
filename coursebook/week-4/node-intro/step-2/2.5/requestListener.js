const fs = require('fs')
const path = require('path')

const requestListener = (req, res) => {

  // now for our last step, let's add the final condition, error 404
  if (req.url === '/' && req.method === 'GET') {
    const file = path.join('2.5', 'public', 'index.html')
    fs.readFile(file, (err, data) => {
      if (err) console.log(err)
      else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      }
    })
  } else if (req.url === '/public/index.css' && req.method === 'GET') {
    const file = path.join('2.5', 'public', 'index.css')

    // we have two requests that we need to handle (css and frontend js logic)
    fs.readFile(file, (err, data) => {
      if (err) console.log(err)
      else {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.end(data)
      }
    })
  } else if (req.url === '/public/index.js' && req.method === 'GET') {
    const file = path.join('2.5', 'public', 'index.js')

    // we have two requests that we need to handle (css and frontend js logic)
    fs.readFile(file, (err, data) => {
      if (err) console.log(err)
      else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
        res.end(data)
      }
    })
  } else {
    // is this status code good? (use the network tab to see if it makes sense)
    // why is the output on the screen not parsed properly as html?
    res.writeHead(200, { 'Content-Type': 'application/javascript' })
    res.write('<h1>Error 404</h1>')
    res.write('<h2>Page Not Found</h2>')
    res.end()
  }
}

module.exports = requestListener;
