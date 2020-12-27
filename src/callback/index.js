function sum (a, b){
    return a + b ;
}

function calc (v1, v2, callback){
    return callback(v1, v2)
}

console.log(calc(6,2,sum))
