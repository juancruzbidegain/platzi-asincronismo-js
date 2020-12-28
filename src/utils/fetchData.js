let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;



let api = 'https://rickandmortyapi.com/api/character/';

// const  fetchData =(url_api) => {

//     return new Promise((resolve, reject) => {
//         const  xhttp = new XMLHttpRequest();
//         xhttp.open('GET', url_api, true);
//         xhttp.onreadystatechange = (() => {
//             if(xhttp.readyState === 4){
//             (xhttp.status === 200) 
//             ? resolve(JSON.parse(xhttp.responseText)) 
//             // : reject(new Error(('error'))
//         })    
//         xhttp.send()
//     })
// }

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
      // instanciamos la conexion
      const xhttp = new XMLHttpRequest();
      // abrir una conexion con el metodo, la ruta y si es asincrono
      xhttp.open('GET', url_api, true);
      // validacion del llamado
      xhttp.onreadystatechange = (() => {
        // comparamos el 4 porque eso indica que se completo la peticion
        if(xhttp.readyState === 4){
          // verificamos que el status este en 200, 200 es que es correcto
          xhttp.status === 200
            // si esta en 200
            ? resolve(JSON.parse(xhttp.responseText))
            // si no esta en 200
            : reject(new Error('Error ' + url_api))
        }
      });
      // por ultimo enviamos la peticion
      xhttp.send();
    });
  }


module.exports = fetchData;