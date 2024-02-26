Promise.all([
    Promise.resolve("promise 1"),
    Promise.reject("promise 2"),
    Promise.resolve("promise 3") 


]).then(console.log).catch(console.log);


//  promise.all takes an iterable of promises as input and return a single promise. the return promise fulfills when all input's promises fulfill , it reject if any promises get rejected;


// output: Promise 2;