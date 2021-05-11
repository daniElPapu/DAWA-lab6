export default ({PersonsRepository})=>{
    return async ({id})=>{
        return PersonsRepository.getOne({id})
    }
}