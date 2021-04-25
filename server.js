var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 3001  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})
app.get('/api/persons', function(req, res) {
    res.json([
        { 
            id: 1, 
            name: "Arto Hellas",
            number: "040-123456"
        },
        {
            id: 2,
            name: "Ada Lovelace",
            number: "39-44-5323523"
        },
        {
            id: 3,
            name: "Dan Abramov",
            number: "12-43-234345"
        },
        {
            id: 4,
            name: "Mary Poppendick",
            number: "39-23-6423122"
        },
    ])   
  })
// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)