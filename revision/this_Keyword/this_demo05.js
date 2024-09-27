const obj = {
    x:10,
    y:20,

    display:function(){
        console.log(`value of x is ${this.x} and y is ${this.y} from the outer x`);

        const inner =()=>{
            console.log(`value of x is ${this.x} and y is ${this.y} from inner x`) //here arrow function doesnt have this defined so it will go one level up (lexical scoping) and check is this defined so here display function has this defined which is resolved by callsite obj thats why here x and y have value of 10 and 20;
        }

        inner()
    }
}

obj.display()