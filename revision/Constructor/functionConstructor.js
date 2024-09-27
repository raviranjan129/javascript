function Product(n,p,d,i){
    this.name=n;
    this.desc=d;
    this.price=p;
    this.image=i;
}

const p1=new Product("iphone",100000,"apple iphone","image");
console.log(p1);

// function based contructor is the older way;