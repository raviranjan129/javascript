const obj = {
    x:10,
    y:20,

    nested:{
        z:22,
        y:40,

        displayFromInner:()=>{
            
            console.log(`value of x is ${this.x} and y is ${this.y}`) //this will give undefined bcz of arrow function , this refers to the global scope and there is no this defined in the arrow function;
        }
    },
    displayFromOuter:function(){
        console.log(`value of x is ${this.x} and y is ${this.y}`);
    }
}

obj.displayFromOuter();
obj.nested.displayFromInner();