const fetchData = require("../utils/fetchData")

let api = 'https://rickandmortyapi.com/api/character/';


const anotherFunction = async (api) => {
    try{
        const getData = await fetchData(api)
        const getCharacter = await fetchData(`${api} ${data.result[0].id}`)
        const getOrigin = await fetchData(getCharacter.origin.url)
        console.log(getData.info.count)
        console.log(getCharacter.name)
        console.log(getOrigin.dimension)


    }catch(err){
        console.log(err)
    }
}

console.log(1)
anotherFunction()
console.log(2)