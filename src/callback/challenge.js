let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/'

    function fetchData(url_api, callback){
        let xhttp = new XMLHttpRequest()
        xhttp.open("GET", url_api, true)
        xhttp.onreadystatechange = function(e){
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    callback(null, JSON.parse(xhttp.responseText))
            }else{
                const err = new Error('Error')
                return callback(err)
            }
        }
        xhttp.send()
    }
}

// primero buscamos la lista de personajes
fetchData(API, (error1, data1) => {
    // si error, matamos retornando un error
    if(error1) return console.error(error1);
    // luego buscamos en la api el id de Rick
    fetchData(api + data1.results[0].id, (error2, data2) => {
      // si error, matamos retornando un error
      if(error2) return console.error(error2);
      // por ultimo la consulta a la api que contiene su dimension
      fetchData(data2.origin.url, (error3, data3) => {
        // si error, matamos retornando un error
        if(error3) return console.error(error3);
        
        // mostramos los resultados :) 
        console.log(data1.info.count);
        console.log(data2.name);
        console.log(data3.dimension);
        
        // rutas de las peticiones en orden
        console.log(api);
        console.log(api + data1.results[0].id); 
        console.log(data2.origin.url); 
      
      });
    });
  });