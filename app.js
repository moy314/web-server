const express = require('express')
const app = express()

app.get('/hola', function (req, res) {
  res.send('hola mundo ');
})

app.get('/', function (req, res) {
    res.send('pagina inicial');
  })

  app.get('*', function (req, res) {
    res.send('404 pagina no encontrada ');
  })

app.listen(3000);