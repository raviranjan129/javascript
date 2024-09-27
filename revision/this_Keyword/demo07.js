class Product{
    

    constructor(n,d,p,i){
        this.name=n;
        this.desc=d;
        this.price=p;
        this.image=i;
    }
    displayProduct(){
        setTimeout(() => {
            console.log("product details are ",this.name,this.desc,this.price,this.image); // here this is comming from corresponding closure;
        }, 5000);
    }
}

const p1=new Product("ipnone",10000,"Apple iphone","some image");

console.log(p1);
p1.displayProduct()

const p2 = new Product("Galaxy s23",100000,"samsung galaxy s23" , "image")
console.log(p2);
p2.displayProduct()