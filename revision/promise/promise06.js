function createPromise(time){
    return new Promise((res,rej)=>{
        res(time);
    },time);
}

const pr= createPromise(10000);

const resolver=(val)=>{
    return 20                //pr 2 resolved with the value that the resolver function returned, if function does not reutrn anything then it return undefined
};
const rejecter= (val)=>console.log("rejected with the value",val);


const pr2 = pr.then(resolver,rejecter); 
console.log("pr2",pr2);