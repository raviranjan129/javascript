function createPromise(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            const value=Math.random();
            if(value<0.5){
                res(value);
            }else{
                rej(value);
            }
        }, 5000);
    })
}

const response=createPromise();

response.then(function fulfillHandler(value){
    console.log("promse fulfilled with value",value);
},function rejectHandler(value){
    console.log("promise Rejected with value",value);

})

response.then(function fulfillHandler(value){
    console.log("promse fulfilled with value",value);
},function rejectHandler(value){
    console.log("promise Rejected with value",value);

})