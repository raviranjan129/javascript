console.log("Hey there");

console.log("Starting to execute");

setTimeout(() => {
    console.log("work from set timeout");
}, 10000);  // set timeout is not native part of js , so it will execute by R.E ,and it will completes after 10000ms;

console.log("End"); 