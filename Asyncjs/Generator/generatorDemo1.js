
function* gen(){
    console.log("line 1")
    yield 1;
    console.log("line 2")
    yield 2;
    console.log("line 3");
    yield 3;
    console.log("line 4")
    yield 4;
    yield 5;
    yield 6;
}

const x=gen()  //returns generator object;

console.log(x.next())
console.log("is paused")
console.log(x.next())
console.log("is Paused")
console.log(x.next())
console.log("is Paused")
console.log(x.next())
console.log("is Paused")
console.log(x.next())
console.log("is Paused")
console.log(x.next())
console.log("is Paused")
console.log(x.next())
console.log("is Paused")


/**
 * yield-> it will immeditally bring you out of a generator function 
 * 2> whenever value you yield with is given to value parameter of the return object
 * 3> if there are more yields left in the generator ,done is false;
 */


/**
 * when you call a normal fun it will execute everything in one shot ,untill or unless lines of code done or you returned;
 */

/**
 * generators are similar to normal function with a few changes 
 * to declare a generator u use function* instead of function keyword;
 */