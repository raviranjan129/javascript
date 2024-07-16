function createPromise(time){
    return new Promise((res,rej)=>{
        rej(time)
    },time)
}

createPromise(10000)
.catch(function r1(value){
    console.log("handler first",value);
    return value*2                                        // .catch also returns a new promise ;
})
.then(function r2(value){
    console.log("first dot then",value)
    return value*2;
})
.then(function g (value){
    console.log("third dot then",value);
    throw 600;
})
.catch(function r3(value){
    console.log("error handler",value);
    return value*3
})