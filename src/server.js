import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import personsRouter from './routes/persons'

const app = express()    
app.use(helmet())
app.use(morgan('dev')) 
app.use(express.json())

app.use('/',personsRouter)

var port = process.env.PORT || 3001  
app.listen(port,()=>{
    console.log('API escuchando en el puerto ' + port)
})
