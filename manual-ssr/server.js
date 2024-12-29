const path = require('path')
const React = require('react')
const { parse } = require('url')
const { readFileSync } = require('fs')
const { createServer } = require('http')
const { renderToString } = require('react-dom/server')

const pizzas = [
  {
    name: 'Focaccia',
    price: 6,
  },
  {
    name: 'Pizza Margherita',
    price: 10,
  },
  {
    name: 'Pizza Spinaci',
    price: 12,
  },
  {
    name: 'Pizza Funghi',
    price: 12,
  },
  {
    name: 'Pizza Prosciutto',
    price: 15,
  },
]

function Home() {
  return (
    <div>
      <h1>🍕 Fast React Pizza Co.</h1>
      <p>This page has been rendered with React on the server 🤯</p>

      <h2>Menu</h2>
      <ul>
        {pizzas.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.name} />
        ))}
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <span>{count}</span>
    </div>
  )
}

function MenuItem({ pizza }) {
  return (
    <li>
      <h4>
        {pizza.name} (${pizza.price})
      </h4>
      <Counter />
    </li>
  )
}

const htmlFilePath = path.resolve(__dirname, 'index.html')
const htmlTemplate = readFileSync(htmlFilePath, 'utf-8')

const clientJSPath = path.resolve(__dirname, 'client.js')
const clientJS = readFileSync(clientJSPath, 'utf-8')

const port = 5000
const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname

  if (pathName === '/') {
    const renderedHTML = renderToString(<Home />)
    const html = htmlTemplate.replace('%%CONTENT%%', renderedHTML)

    res.writeHead(200, {
      'content-type': 'text/html',
    })

    res.end(html)
  } else if (pathName === '/client.js') {
    res.writeHead(200, {
      'content-type': 'application/javascript',
    })
    res.end(clientJS)
  } else res.end('The URL cannot be found ')
})

server.listen(port, () =>
  console.log(`Listening for requests on port: ${port}`)
)
