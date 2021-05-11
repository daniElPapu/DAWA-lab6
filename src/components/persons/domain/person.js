import Joi from 'joi'

const personId = Joi.string().regex(/^[0-9a-fA-F]{24}$/)

export const personIdSchema = Joi.object({
  id: personId.required(),
})
export const getAllPersonsSchema = Joi.object({
})
export const createPersonSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required(), 
})


