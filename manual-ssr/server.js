const { parse } = require('url')
const { createServer } = require('http')
const { readFileSync } = require('fs')
const path = require('path')

const htmlFilePath = path.resolve(__dirname, 'index.html')
const htmlTemplate = readFileSync(htmlFilePath, 'utf-8')

const port = 5000
const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname

  if (pathName === '/') {
    res.writeHead(200, {
      'content-type': 'text/html',
    })

    res.end(htmlTemplate)
  } else if (pathName === '/test') res.end('Test')
  else res.end('The URL cannot be found ')
})

server.listen(port, () =>
  console.log(`Listening for requests on port: ${port}`)
)
