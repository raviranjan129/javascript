class product{
    // (1: properties => class member or data members );

    name;
    price;
    description;
    image;


    constructor(n,p,d,i){
        this.name = n;
        this.price = p;
        this.description= d;
        this.image = i;

    
    }

 
 
 buyProduct(){
    setTimeout(() => {
        console.log("product details are ",this.name,this.description,this.price,this.image);
    }, 5000);
 }

}
 // here closure cicks in . bcz buyProduct has gone from callstack , arrow fun does not have this,so it goes one level up (buyProduct) to access this.

    
const obj1 = new product ("iphone",100000,"Apple","Some image");  // new keyword gives the access  of newly created object;

console.log(obj1);


obj1.buyProduct();

// const obj2 = new product ("S3",90000,"Samsung","Some image");

// console.log(obj2);