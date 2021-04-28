const express = require('express')
const next = require('next')
const path = require('path')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev,dir:'.' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about', req.query)
  })

  server.get('/example-shop', (req, res) => {
    return app.render(req, res, '/example-shop', req.query)
  })

  server.get('/tarif', (req, res) => {
    return app.render(req, res, '/tarif', req.query)
  })

    server.get('/blog', (req, res) => {
    return app.render(req, res, '/blog', req.query)
  })

    server.get('/valuta', (req, res) => {
    return app.render(req, res, '/valuta', req.query)
  })

    server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact', req.query)
  })

    server.get('/search', (req, res) => {
    return app.render(req, res, '/search', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})