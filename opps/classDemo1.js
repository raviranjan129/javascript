
class product{

    //properties; ->class members/data members
    // name;
    // price;
    // description;
    // image;


    constructor(n,p,d,i){
        console.log('before logging',this)
       this.name=n;
       this.price=p;
       this.description=d;
       this.image=i;
       this.rating =0; // default value;

       console.log("creating an obj",this)
    }


    //behaviour -> class method
    buyProduct(){
        console.log("bought a new product");
    }
}

const obj1=new product('iphone',100000,'apple iphone','some image');
console.log(obj1)

const obj2=new product('s23',1000007,'samsung phone','some image');
console.log(obj2)