require('dotenv').config();
const express = require('express')
const app = express()

/*primero se instaló npm i dotenv. despues se creó el archivo .env y despues se decralo port*/ 
const port = process.env.PORT;



var hbs = require('hbs');

//middlreware servir contenido estático

app.use(express.static('public'));
app.set('view engine', 'hbs');




// handlebars
hbs.registerPartials(__dirname + '/views/partials', function (err) {console.log('error',err)});


// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);
// app.get('/hola', function (req, res) {
//   res.send('hola mundo ');
// })

app.get('/', function (req, res) {
    res.render('home',{

      nombre:"moises sanchez",
      titulo:"curso node"
    });
  })


  app.get('/generic', function (req, res) {
    res.render('generic',{

      nombre:"moises sanchez",
      titulo:"curso node"
    });
  })




  app.get('/elements', function (req, res) {
    res.render('elements',{

      nombre:"moises sanchez",
      titulo:"curso node"
    } );
  })


  app.get('*', function (req, res) {
    res.send('404 pagina no encontrada ');
  })

app.listen(port,()=>{
  console.log(`escuchando puerto ${port}`);
});