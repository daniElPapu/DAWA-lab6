var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 3001  // establecemos nuestro puerto
var persons =[
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
]
app.get('/', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })   
})
app.get('/api/persons', function(req, res) {
    res.json(persons)   
  })
app.get('/info', function(req, res) {
    res.send("Phonebook has info for "+persons.length +" people <br> "+new Date()+"")   
})
app.get('/api/persons/:id', function(req, res) {
    person = persons.find((person)=>person.id==req.params.id)
    if( person){
        res.json(person)
    }
    else{
        res.status(404).send("Sorry can't find that!")
    }
    
  })
  app.get('/api/persons/delete/:id', function(req, res) {
    person = persons.find((person)=>person.id==req.params.id)
    if(person){
        persons=persons.filter((person)=>person.id!=req.params.id)
        res.send("Borrado Satisfactorio")
    }
    else{
        res.status(404).json("Sorry can't find that!")
    }
    
  })
  app.post('/api/persons', function(req, res) {
    nombre = req.params.name
    number = req.params.number
    if(nombre && number ){
        person=persons.find((person)=>person.name==nombre)
        if(person){
            res.status(400).json({error:"el nombre debe ser unico, ya exite este"})
        }else{        
            persons.push({
                id: parseInt(Math.random()*3000+200),
                name:nombre,
                number:number
            })
        }
        res.send('Registro Añadido')   
    }else{
        res.status(400).json({error:"Debe rellenar todos los campos"})
    }
  })
// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)