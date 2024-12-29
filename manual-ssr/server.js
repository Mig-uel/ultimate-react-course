const { createServer } = require('http')
const { parse } = require('url')

const port = 5000
const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname

  if (pathName === '/') res.end('Hello, world!')
  else if (pathName === '/test') res.end('Test')
  else res.end('The URL cannot be found ')
})

server.listen(port, () =>
  console.log(`Listening for requests on port: ${port}`)
)
