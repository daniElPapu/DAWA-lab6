export default ({PersonsRepository})=>{
    return async ()=>{
        return PersonsRepository.getAll();
    }
}