
const accion = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Correcto')
        }else{
            reject('Fallo')
        }
    })
}

// accion()
//     .then(response => console.log(response))
//     .catch(reject => console.log(reject) )


const accion2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve("Correcto 2")
            },2000)
        }else{
            const err = new Error('Error o flase')
            reject(err)
        }
    })
}

// accion2()
//     .then(response => console.log(response))
//     .catch(err => console.log(err) )


    
Promise.all([accion(), accion2()])
    .then(response => console.log("Resultados en arrays", response))
    .catch(err => console.log(err)) 