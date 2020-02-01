const http = require('http')

// remove the logs and send a proper response.
// visit localhost and from the developer tools go to the network tab
// check the headers of the response and request for localhost
// write head and try it again to show the difference.
const requestListener = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    // res.writeHead(200, { 'Content-Type': 'text/html' }) // try changing the status codes to see if the network tab changes.
    res.write('<h1>Hello World</h1>')
    res.end()
  }
}

const server = http.createServer(requestListener)


server.listen(3000)
