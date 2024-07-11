// creation of promise 

function createPromise(){
    return new Promise((res,rej)=>{
        setTimeout(function timerCompleted(){
const randomValue=Math.random();
   if(randomValue<0.5){
    res(randomValue);
   }else{
    rej(randomValue);
   }
        },5000)
    })
}

const response = createPromise();