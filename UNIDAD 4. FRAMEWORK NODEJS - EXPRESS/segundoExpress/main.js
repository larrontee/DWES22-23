
const express = require('express');
const app = express();
const puertoServidor = 3000;
app.get('/', function (request, response) {
    response.send('Hola estas conectando a express');
});

app.get('/ejemplojson', (req, res) => {
    res.send({
        nombre: 'pepe',
        edad: 20,
        aficiones: ["cine", "pasear"]
    });
});
app.listen(puertoServidor, () => {
    console.log('servidor ejecutando en el puerto 3000');
});