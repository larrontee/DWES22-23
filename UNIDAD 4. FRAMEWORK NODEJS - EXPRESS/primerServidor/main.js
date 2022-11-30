// var http = require('http');
// const server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content.type': 'text/plain' });
//     res.end('Hola Mundo!');
// });
// server.listen(8000);
// console.log('servidor ejecutandose en el puerto 8000');


var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hola Mundo 2!');
});
app.listen(3000, function () {
    console.log('servidor ejecutando en el puerto 3000');
});