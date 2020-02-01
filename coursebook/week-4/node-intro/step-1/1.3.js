const http = require('http')


// now let's go over the importance of url and method checks.
// first only check the url and run the server, everything will log correctly.
// then add a method check, but istead of GET, use POST, and run the server.
// noting will be logged to the terminal.
// Change the method to 'GET' so it works as intended.
const requestListener = (req) => {
  if (req.url === '/' && req.method === 'GET') {
    console.log('this is the url', req.url)
    console.log('this is the method', req.method)
    console.log('this is he headers', req.headers)
    console.log('this is the body', req.body)
  }
}

const server = http.createServer(requestListener)


server.listen(3000)
