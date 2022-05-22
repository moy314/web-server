const express = require('express')
const app = express()

//middlreware servir contenido estático

app.use(express.static('public'));



// app.get('/hola', function (req, res) {
//   res.send('hola mundo ');
// })

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html');
  })

  app.get('/elements', function (req, res) {
    res.sendFile(__dirname + '/public/elements.html');
  })


  app.get('*', function (req, res) {
    res.send('404 pagina no encontrada ');
  })

app.listen(3000);