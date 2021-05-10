import express from 'express'
import persons from './utils/mokup'
import MongoDB from './lib/mongo'

const mongo = new MongoDB()

const app = express()       
        
app.use(express.json())

var port = process.env.PORT || 3001  // establecemos nuestro puerto


app.get('/', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })   
})
app.get('/api/persons', async function(req, res) {  
    const persons = await mongo.getAll('persons',{})
    res.json(persons) 
  })
app.get('/info', async function(req, res) {
    const persons = await mongo.getAll('persons',{})
    res.send("Phonebook has info for "+persons.length +" people <br> "+new Date()+"")   
})
app.get('/api/persons/:id', async function(req, res) {
    var person =await mongo.get('persons',req.params.id)
    if( person){
        res.status(200).json(person)
    }
    else{
        res.status(404).send("Sorry can't find that!")
    }
    
  })
  app.get('/api/persons/delete/:id', async function(req, res) {
    var person =await mongo.get('persons',req.params.id)
    if(person){
        const id = await mongo.delete('persons', req.params.id)
        res.send("Borrado Satisfactorio la persona de id "+id)
    }
    else{
        res.status(404).json("Sorry can't find that!")
    }
  })
  app.post ('/api/persons', async function(req, res){
    const nuevaPersona ={
        nombre: req.body.name,
        number: req.body.number
    }
    if(nuevaPersona.nombre && nuevaPersona.number){ 
        //person=persons.find((person)=>person.name==nuevaPersona.nombre) 
        var person =await mongo.get('persons',null,{nombre: nuevaPersona.nombre})
        if(person){
            res.status(400).json({error:"El nombre debe ser unico, ya exite este"})
        }else{
            const id=await mongo.create('persons',nuevaPersona)
            res.status(201).json({ id, ...nuevaPersona})  
        }
    }else{
        res.status(400).json({error:"Debe rellenar todos los campos"})
    }
  })
// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)