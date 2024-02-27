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

      //  console.log("bought a new product "); // if you do not return any thing then newly created object is returned;

       // return { x:"Ravi"}; // if you return object then the object mentioned here is returned;

        return "Ravi";  // if you return primitive then newly created object is returned;
    }

 // (2 : behaviours => class methods / member function);

 buyProduct(){
    console.log("bought a new product",this);
 }

}
 

    
const obj1 = new product ("iphone",100000,"Apple","Some image");  // new keyword gives the access  of newly created object;

console.log(obj1);




const obj2 = new product ("S3",90000,"Samsung","Some image");

console.log(obj2);