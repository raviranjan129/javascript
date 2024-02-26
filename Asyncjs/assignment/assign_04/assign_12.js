let promise = new Promise((res,rej)=>{
    throw new Error("Error thrown");

})

promise.catch(error=>console.log(error.message));

// output : Error thrown ;