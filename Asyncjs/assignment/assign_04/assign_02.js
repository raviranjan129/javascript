let promise = new Promise((resolve,reject)=>{
    resolve("success");
});

promise.then(value => console.log(value));


// output : success ;