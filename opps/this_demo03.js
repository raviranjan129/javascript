  
  const obj = {
    x:10,
    y:20,

    
    display:() =>{
        console.log(`value of x is ${this.x} and y is ${this.y}`);
    }
}

obj.display();

// output : here value of x any y is undefined

 // bcz for arrow function this keyword doesn't refer to call site but it resolved through lexical scopping ;