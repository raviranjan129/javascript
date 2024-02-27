const obj = {
    x:10,
    y:20,

    display:function(){
        console.log(`value of x is ${this.x} and y is ${this.y} from outer x`);

        const innerobj = {
            x:-1,
            y:-2,

            inner:()=>{
              console.log(`value of x is ${this.x} and y is ${this.y}`)
            }
            
        }
        innerobj.inner();  // here inner method do not have "this" that's why it do not give x=-1 and y=-2, so it goes lexically one level up and display is a normal 
                             //  function so display has access to "this" and display refer to obj as call site hence it gives us x=10 and y=20 ;
    }
}

obj.display();