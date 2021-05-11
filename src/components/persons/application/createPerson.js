export default ({PersonsRepository})=>{
    return async ({name,number})=>{
        const nuevaPersona ={
            nombre: name,
            number: number
        }
        if(nuevaPersona.nombre && nuevaPersona.number){ 
            //person=persons.find((person)=>person.name==nuevaPersona.nombre) 
            //var person =await PersonsRepository.get('persons',null,{nombre: nuevaPersona.nombre})
            /*if(person){
                res.status(400).json({error:"El nombre debe ser unico, ya exite este"})
            }else{
            */ 
            return PersonsRepository.add(nuevaPersona)
            /*}
        }else{
            res.status(400).json({error:"Debe rellenar todos los campos"})
        }*/
        }
    }
}
