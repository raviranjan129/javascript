let count = 0;
setTimeout(() => console.log(count++), 1000); // output is 0 and then update the count to 1;
setTimeout(() => console.log(count++), 2000);  // output is 1 and then update the count to 2;
setTimeout(() => console.log(count++), 3000); // output is 2 and then update the count to 3;

// count++ is post increment ,first print the value then update the value;