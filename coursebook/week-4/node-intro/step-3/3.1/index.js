const http = require('http')
const requestListener = require('./requestListener')

// now this file only holds the logic of the server. 
// We don't need to worry about changing it every time we want something new.
const server = http.createServer(requestListener)

server.listen(3000)
