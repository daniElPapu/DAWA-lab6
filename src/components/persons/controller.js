import  MongoPersonsRepository  from './infraestructure/MongoPersonsRepository'
import getAllPersons from './application/getAllPersons'
import createPerson from './application/createPerson'
import getOnePerson from './application/getOnePerson'
const PersonsRepository = new MongoPersonsRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const getPersons = async (_, res, next) => {
  try {
    const query = getAllPersons({ PersonsRepository })
    const persons = await query()
    res.status(200).json({
      data: persons,
      message: 'Persons listed',
    })
  } catch (e) {
    next(e)
  }
}
export const newPerson= async (req,res,next)=>{
    try {
        const query = createPerson({ PersonsRepository })
        const person = await query(req.body)
        res.status(200).json({
          data: person,
          message: 'Person added',
        })
    } catch (e) {
        next(e)
    }
}
export const getPerson= async (req,res,next)=>{
  try {
      const query = getOnePerson({ PersonsRepository })
      const person = await query(req.params)
      res.status(200).json({
        data: person,
        message: 'Person obtain',
      })
  } catch (e) {
      next(e)
  }
}
export const deletePerson= async (req,res,next)=>{
  try {
      const query = deleteOnePerson({ PersonsRepository })
      const person = await query(req.params)
      res.status(201).json({
        data: person,
        message: 'Person deleted',
      })
  } catch (e) {
      next(e)
  }
}


    