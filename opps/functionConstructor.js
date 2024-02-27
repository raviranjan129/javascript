function Product(n,p,d,i){
    this.name=n;
    this.desc=d;
    this.price=p;
    this.image=i;


    this.display = function(){
        console.log("Name",this.name,"Price",this.price);
    }
}

const p1 = new Product("Iphone",100000,"Apple Iphone","Image");
console.log(p1);

p1.display();

/**
 * this is the way to create blue print;
 * 
 * But class based syntax is prefered to create blue print;
 */

