function createSyncPromise(){
    return new Promise((res,rej)=>{
        for(let i=0;i<1000000000;i++){
            //blocking code;
        }

       res(100);
    })
}

const response=createSyncPromise();