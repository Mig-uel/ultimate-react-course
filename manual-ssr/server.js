const { log } = require('console')
const { createServer } = require('http')
const { parse } = require('path')

const port = 5000
const server = createServer((req, res) => {
  const pathName = parse(req.url, true).name

  if (pathName === '') res.end('Hello, world!')
  else if (pathName === 'test') res.end('Test')
  else res.end('The URL cannot be found ')
})

server.listen(port, () => log(`Listening for requests on port: ${port}`))
