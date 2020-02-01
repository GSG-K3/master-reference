
const requestListener = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>Hello World</h1>')
    res.end()
  }
}

module.exports = requestListener;
