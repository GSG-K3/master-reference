const fs = require('fs')
const path = require('path')

const requestListener = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const file = path.join('2.3', 'public', 'index.html')

    // now that we understand what err and data stand for, 
    // let's send the file instead of our hello world.
    // why is the server stuck? 
    // open the network and see what requests are finished and what is penging
    fs.readFile(file, (err, data) => {
      if (err) console.log(err)
      else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      }
    })
  }
}

module.exports = requestListener;
