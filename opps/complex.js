  /**
   * write a complex number class ,with 2 member function that can add 2 complex no.and multiply 2 complex number;
   */
  
  
  class complexNumber{

constructor(real,imag){
  this.real= real;
  this.imag= imag;
}

add(num){
  return `${this.real +  num.real} + i${this.imag +num.imag}`
}

mul(num){
  return `${this.real*num.real - this.imag*num.imag} + i${this.imag*num.imag + this.imag*num.real}`
}


  }

  const c1 = new complexNumber(3,2); 
  const c2 = new complexNumber(1,7);

  console.log(c1.add(c2));
  console.log(c1.mul(c2));