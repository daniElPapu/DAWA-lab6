export default ({PersonsRepository})=>{
    return async ({id})=>{
        return PersonsRepository.delete({id})
    }
}