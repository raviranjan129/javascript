let promise = Promise.resolve(Promise.resolve("Resolve"));
promise.then(res=>console.log(res));

// output : Resolve; 