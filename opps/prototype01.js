function product(name,price){
    this.name=name;
    this.price = price;
}

const p = new product("Iphone",120000);

product.prototype.display= function(){
    console.log("Details of product are ",this);
}

p.display();

// if you want to access product.prototype from p,

console.log(p.__proto__);



class Electronics{
    getCategoryName(){
        return "Electronics";
    }
}

class Camera extends Electronics{
    getSpecs(){
        console.log("specs of camera is ........");
    }
}
let c = new Camera();
console.log(c);
console.log(c.getSpecs);
c.getCategoryName();
