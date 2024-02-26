let promise = new Promise((res,rej)=>{
    res("promise resolved");
    rej("promise rejected");
});
promise.then(console.log).catch(console.log);

// output : promise resolved; 