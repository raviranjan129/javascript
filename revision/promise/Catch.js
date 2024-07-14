function createPromise(time){
    return new Promise((res,rej)=>{
        setTimeout(() => {
           rej(time)
        }, time);
    })
}



createPromise(1000) // returns pr1 {value:undefined ,state:pending , onfulfilled:[f],onrejected: []}
.then(function f(value){
    console.log("value of first then ",value);
    return value*2;                                       //if function return something then it return otherwise it will return undefined;
},function r1(value){
    console.log("handler for r1");
    throw 400;
})                // returns pr2 {value:undefined ,state:pending , onfulfilled:[g],onrejected: []}
.then(function g(value){
    console.log("value of second then",value);
    return value*2;

})       // .then on pr2 returns pr3 {value:undefined ,state:pending , onfulfilled:[h],onrejected: []}
.then(function h(value){
    console.log("value in third then",value);
    return value*2;
})    // returns pr4 {value:undefined ,state:pending, onfulfilled:[],onrejected: []}

.catch((error)=>{
    console.log("some exxeption came in between",error)
})