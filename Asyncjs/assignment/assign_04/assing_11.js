let promise1 = Promise.resolve ("first");
let promise2= Promise.resolve("second");
Promise.race([promise1,promise2]).then(value =>console.log(value));


// promise.race() takes an iterable of promises as input and it returns a single promise; 
// it takes care of only first promise , it dont care about the second promise either it completd or rejected , it only returns the first promise ;