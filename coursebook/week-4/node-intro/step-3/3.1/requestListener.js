const { serveHtml, serveCSS, serveJS } = require('./controllers/serveHome')
const { notFound } = require('./controllers/serveError')
// now let's look at the logic of this file (2.6).
// we are serving home page and error page.
// the file is getting larger and we are only serving one page.
// time to abstract the function.
const requestListener = (req, res) => {

  if (req.url === '/' && req.method === 'GET') {
    serveHtml(req, res)
  } else if (req.url === '/public/index.css' && req.method === 'GET') {
    serveCSS(req, res)
  } else if (req.url === '/public/index.js' && req.method === 'GET') {
    serveJS(req, res)
  } else {
    notFound(req, res)
  }
}

module.exports = requestListener;
