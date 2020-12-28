const asyfunction = () => { 
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve ('Ok'))
            : reject (console.log('Error'))
        })
};


const asyfunction_real = async () => { 
    const llamado = await asyfunction()
    console.log(llamado)
};

console.log("before")
asyfunction_real()
console.log('after')