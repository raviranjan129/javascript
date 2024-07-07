function blockingpiece(){
    for(let i=0;i<10000000000;i++){
        //some tasks;
    }
}

let x=10;

setTimeout(() => {
    console.log("timer 1 done");
}, 5000);

blockingpiece();

setTimeout(() => {
    console.log("Timer 2 done");
    console.log(x);
}, 3000);

setTimeout(() => {
    blockingpiece();
    console.log("timer 3 done");
    x++;
}, 100);
blockingpiece();
console.log(x);