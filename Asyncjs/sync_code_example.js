let x= 10 ;

//  sync code => time consuming task , you have to wait for it ;

for(let i= 0; i< 10000000000; i++){  // first execute this for loop ;
    if(i% 100000000){       
        i++; 
    }
}

console.log(x);  // after executing for loop x will print;