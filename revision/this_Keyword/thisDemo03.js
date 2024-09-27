const obj = {
    x:10,
    y:20,

    display:()=>{
        console.log(`value of x is ${this.x} and y is ${this.y}`) // this refers to global scope and there is no x and y in the global scope thats why x and y is undefined;
    }
}

obj.display()