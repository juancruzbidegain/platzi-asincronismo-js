function sum (a, b){
    return a + b ;
}

function calc (v1, v2, callback){
    return callback(v1, v2)
}

console.log(calc(6,2,sum))


function date(cb){
    console.log(new Date())
    setTimeout( function () {
        let date = new Date()
        callback(cb)
    },3000)
}

function cb(dateNow){
    console.log(dateNow)
}

date(cb)