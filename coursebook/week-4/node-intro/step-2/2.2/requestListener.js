// this file is now responsible for listening to the requests and sending responses.
const fs = require('fs')
const path = require('path')

// now let's serve the html file we want to send.
// we will need to send the file, but not as a file.
// we need to send it as something that networks can communicate.
// for that, we will use node's built in readFile function.
const requestListener = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const file = path.join('2.2', 'public', 'index.html')

    // the readFile takes more than one argument. only the first is mandatory.
    // the callback is used to tell the function what to do with the file once it reads it.
    fs.readFile(file, (data) => {
      // why is this console output null?
      console.log('data', data)
    })
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Hello World</h1>')
    res.end()
  }
}

module.exports = requestListener;
