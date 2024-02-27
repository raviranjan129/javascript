const obj ={
    x:10,
    y:20,

    nested:{
        z:30,
        y:22,

        displayFromInner:()=>{   // here this resolves with lexical scoping bcz of the arrow function ;
            console.log(`value of x is ${this.x} and  y is ${this.y}`);
        }
    },
    displayFromOuter:function(){                      // here this resolves with the call site bcz of the normal function expression ;
        console.log(`value of x is ${this.x} and y is ${this.y}`); 
    }
}

obj.displayFromOuter();
obj.nested.displayFromInner();



