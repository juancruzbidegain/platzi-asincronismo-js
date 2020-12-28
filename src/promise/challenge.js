const fetchData = require("../utils/fetchData")
const API = "https://rickandmortyapi.com/api/character/"

fetchData(API)
    .then(result => {
        console.log(result.info.count)
        return fetchData(`${API} ${result.results[1].id}`)
    })
    .then(result => {
        console.log(result.name)
        return fetchData(result.origin.url)
    })
    .then(result => {
        console.log(result.dimension)
    })
    .catch(err => console.log(err))

    