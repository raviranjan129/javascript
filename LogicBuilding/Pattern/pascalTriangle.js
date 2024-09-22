/**
     1 
    1 1 
   1 2 1 
 1 3 3 1 
 */

 function pascalTriangle(n){
    for(let i=1;i<=n;i++){
        for(let j=i;j<=n;j++){
            process.stdout.write(" ")

        }
        let x=1; // x represents the current value being printed ,which is binomial coeff. it starts at 1,since the first elem in each row is always 1;
        for(let k=1;k<=i;k++){

            process.stdout.write(x + " ")
            x=x*(i-k)/k; //this will compute the binomial coefficients for each row;
            //this formula updates the current element based on the previous one;
            }

            console.log() 
        }
        
    }
 
 let n=4;
 pascalTriangle(n)