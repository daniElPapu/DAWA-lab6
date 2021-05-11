import MongoLib from '../../../lib/mongo'

class MongoPersonsRepository { // implement an interface
  constructor () {
    // super()
    this.collection = 'persons'
    this.mongoDB = new MongoLib()
  }

  async add (person) {
    const id = await this.mongoDB.create(this.collection, person)
    return { id, ...person }
  }

  async update ({ id, person }) {
    return this.mongoDB.update(this.collection, id, person)
  }

  async delete ({ id }) {
    return this.mongoDB.delete(this.collection, id)
  }

  async getAll () {
    return await this.mongoDB.getAll(this.collection)
  }
  async getOne ({id}) {
    return await this.mongoDB.get(this.collection,id)
  }
}

export default MongoPersonsRepository