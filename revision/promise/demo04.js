function createPromise(){
    return new Promise((res,rej)=>{
        for(let i=0; i<1000000000;i++){

        }
        res(1);
        res(2);   // once promise is resolved with the value then its state will not going to change again ,hence res(2) will not execute;
    })
}

const response=createPromise();