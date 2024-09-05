
function* gen(){
    console.log("start");
    yield 10;
    console.log("middle");

    const x=10 + (yield 30); // yield with value  30 

    console.log(x); // it will NaN bcz when execution restart then yield-> undefined and adding 10 will Nan . if you want to add then you need to pass arg. what to add .
    yield x;

}

const v=gen() // it is going to create generator obj;

console.log(v.next()); // it will start executing ;
console.log(v.next());
console.log(v.next(66));  //this parameter will pass where you last yielded;