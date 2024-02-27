const obj = {
    x:10,
    y:20,

    display:function(){

        console.log(`value of x is ${this.x} and y is ${this.y} from outer x`);

        const inner=()=>{
            console.log(`value of x is ${this.x} and y is ${this.y} from inner x`) //inner function is using this keyword but it does not have this so it goes .
        }                                                                           //lecically one function up ,so display function is a normal func so it has this 
        inner();
    }
}
obj.display();
