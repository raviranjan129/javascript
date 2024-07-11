function createPromise(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            let value= Math.random();

            if(value<0.5){
                res(value)
            }else{
                rej(value);
            }
        }, 100);
    })
}

const response=createPromise();

console.log(response);
for(let i=0;i<10000000000;i++){
    //blocking piece of code;
}

for(let i=0;i<10000000000;i++){
    //blocking piece of code;
}