const obj = {
    x:10,
    y:20,

    nested:{   // nested obj  has two propertis z and y , and displayFromInner is a mehtod which has a function expression which is log to the x value of obj 
                                                                                               // and y value of nested ,here nested do not have x prop. then it gives undefined;
     
        z:30,
        y:22,

        displayFromInner:function(){    
            console.log(`value of x is ${this.x} and y is ${this.y}`);
        }
    },

    displayFromOuter:function(){
        console.log(`value of x is ${this.x} and value of y is ${this.y}`);
    }
}


obj.displayFromOuter();
obj.nested.displayFromInner();