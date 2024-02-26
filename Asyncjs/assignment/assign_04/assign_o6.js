let promise = new Promise((resolve,reject)=>{
    setTimeout (()=>resolve("Resolved "),1000);
})

promise.then(value=>console.log(value));
console.log("After promise");

/**
 
 * 1> After promise; -> it prints first bcz the promise get resolved after 1 sec.;
2 > Resolved ;
 */