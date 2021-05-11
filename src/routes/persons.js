import express from 'express'
import { validationHandler} from '../utils/middlewares/validationHandler'
import { getPersons, newPerson ,getPerson, deletePerson} from '../components/persons/controller'
import { createPersonSchema, getAllPersonsSchema , personIdSchema } from '../components/persons/domain/person'

const router = express.Router()

router.get('/', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })   
})
router.get(
    '/api/persons',
    validationHandler(getAllPersonsSchema),
    getPersons
)
router.get(
    '/api/persons/:id', 
    validationHandler(personIdSchema,"params"),
    getPerson
)
router.get(
    '/api/persons/delete/:id', 
    validationHandler(personIdSchema,"params"),
    deletePerson
)

router.post (
    '/api/persons', 
    validationHandler(createPersonSchema),
    newPerson
)
export default router