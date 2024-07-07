for(let i =0;i<10000000000;i++){
    //some task
}

for(let i=0;i<100000000;i++){
    //some task
}

console.log("started timer 1");
setTimeout(() => {
    console.log("timer 1 done");
}, 5000);

for(let i =0;i<200000000000;i++){
    //some task;
}
console.log("started timer 2");
setTimeout(() => {
    console.log("Timer 2 done");
}, 0);

for(let i =0;i<10000000;i++){
    //some task;
}

console.log("started timer 3");
setTimeout(() => {
    console.log("timer 3 done");
}, 20000);
console.log("End");