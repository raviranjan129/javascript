function createPromise(time){
    return new Promise((res,rej)=>{
        setTimeout(() => {
           res(time)
        }, time);
    })
}

const resolver = (val)=>{
    console.log("resolving with",value);
    return 20;
}

const rejector = (val)=>console.log("rejected with value",val);

createPromise(1000)
.then((value)=>{
    console.log("value of first then ",value);
    return value*2;                                       //if function return something then it return otherwise it will return undefined;
})
.then((value)=>{
    console.log("value of second then",value);
    return value*2;

})
.then((value)=>{
    console.log("value in third then",value);
    return value*2;
})