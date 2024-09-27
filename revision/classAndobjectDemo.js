class product{

    constructor(n,p,d,i){
        this.name=n;
        this.desc=d;
        this.price=p;
        this.image=i;

        // return {name:"ravi"} // if you return obj then this object will be returned otherwise newly created object will be returned;
    }

    displayProduct(){

    }
}
const p1=new product("ipnone",100000,"apple iphone","some Image") //new-> it will create new plane js obj .2> some kind of linking.3>allocate corresponding obj to constructor
console.log(p1) 