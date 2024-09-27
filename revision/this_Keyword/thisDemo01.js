const obj = {
    x:10,
    y:20,

    display:function(){
        console.log(`value of x is ${this.x} and y is ${this.y}`)
    }
}

obj.display()

/**
 * who is calling display ? -> obj
 * That means obj is the call site or the one who is calling for usage of this
 */