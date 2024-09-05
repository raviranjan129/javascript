function createCounter(){
    let count=0;
    return {
        //returning an object 

        increment:function() {return count +=1}, // closing over variable count;
        decrement:function() {return count -=1},
        getCount: function() {return count}
    }
}

let c=createCounter()
console.log(c) // object
console.log(c.increment()) //1
console.log(c.increment()) //2
console.log(c.getCount()) //2
console.log(c.decrement()) //1

// they are not snap shotting it , they are closing over the variable;