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

for(let i=0;i<100000000;i++){
    //blocking code;
}

console.log("promise",response);// this will show promise pending bcz promise is not resolved on the main thread,on main thread one more blocking piece of code is running ,after that the promise will be resolved or rejected;

for(let i=0;i<100000000;i++){
    //blocking code;
}