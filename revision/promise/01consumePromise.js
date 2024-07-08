function createPromise(){
    return new Promise((res,rej)=>{
                res("Ravi");
    })
}

function blockingcode(){
    for(let i =0;i<10000000000;i++){

    }
}

setTimeout(() => {
    console.log("timer 1 done");
}, 3000);

setTimeout(() => {
    console.log("timer 2 done");
}, 5000);

blockingcode();

setTimeout(() => {
    console.log("timer 3 done");
}, 4000);


let pr = createPromise();

pr.then(function succes(value){
    console.log("resolved with value",value)
},function failure(value){
    console.log("reject with the value ",value);
});