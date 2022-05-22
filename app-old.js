const http = require('http');

http.createServer((req,res) =>{

    //res.write('hola mundo ');
    // console.log(res);
    // res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('hola mundo x2');
    res.end();
}).listen(8080);

console.log('escuchando el puerto 8080');