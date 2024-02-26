 let promise = Promise.resolve(1);
 promise.then(value => value +2 ).then(value => console.log(value));

 // first .then takes a callback when the promise get fullfiled the first .then return fullfiled value + 2 and the chained .then also taking a callback (value + 2)  from the previous .then , in this simply console .log happened; 


 // output : 3 ;