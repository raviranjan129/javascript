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
    //rejection callback for pr1   

    console.log("executing r1",value)    // function rr1 is rejection handler and also throw an exception  and r2 will handle it ;

    throw 7000;
})                // returns pr2 {value:undefined ,state:pending , onfulfilled:[g],onrejected: []}
.then(function g(value){
    console.log("value of second then",value);
    return value*2;

},function r2(value){
    console.log("pr 2 executing",value)
    return 10;
})       // .then on pr2 returns pr3 {value:undefined ,state:pending , onfulfilled:[h],onrejected: []} 
.then(function h(value){
    console.log("value in third then",value);
    return value*2;
})    // returns pr4 {value:undefined ,state:pending, onfulfilled:[],onrejected: []}