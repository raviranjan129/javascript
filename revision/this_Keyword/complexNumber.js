class complexNumber{
    

    constructor(real,imag){
        this.real=real;
        this.imag=imag;
    }

    add(num){
        return `${this.real+num.real} + i${this.imag+num.imag}` //this refers to callsite (c1) and num refers to c2 bcz it is passed as argument;
    }

    mul(num){
        return `${this.real*num.real-this.imag*num.imag} + i${this.real*num.imag + this.imag*num.real}`
    }
}

const c1=new complexNumber(3,5);
const c2=new complexNumber(4,7);
console.log(c1.add(c2))
console.log(c1.mul(c2))