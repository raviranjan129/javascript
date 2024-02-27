const obj = {
    x:10,
    y:20,

    display:function(){
        console.log(`value of x is ${this.x} and y is $ {this.y}`);
    }
}
 obj.display ();


 /**
  * who is calling display ? -> obj ;
  * that means obj is the call site or the one who is calling for usage of this ;
  */



 /**
  * where ever u see "this" keyword being used (without arrow function) at thsoe places "this" keyword refres to the call site ;
  */