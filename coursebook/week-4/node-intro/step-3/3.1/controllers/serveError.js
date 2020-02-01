exports.notFound = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/html' })
  res.write('<h1>Error 404</h1>')
  res.write('<h2>Page Not Found</h2>')
  res.end()
}