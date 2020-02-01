const http = require('http')

// as we send requests from xhr to APIs, 
// so does our server listen to requests made by xhr
// this is the function.
const requestListener = (req) => {
  console.log('url', req.url)
  console.log('method', req.method)
  console.log('headers', req.headers)
  console.log('body', req.body)
}

// the request listener goes as argument to the createServer function.
const server = http.createServer(requestListener)

// at this point run the file.
// obviously it will not work because we are not running the server.

// now we add the server.listen method.
server.listen(3000)

// run it and go to localhost to show the request keys in the terminal
// url should be /
// method should be GET >> this is the default method.
// body should be undefined.


/**
 * Question: why is the body of a GET request undefined?
 */