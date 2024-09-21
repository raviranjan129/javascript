/**
          1 
        2 1 2 
      3 2 1 2 3 
    4 3 2 1 2 3 4 
  5 4 3 2 1 2 3 4 5 
6 5 4 3 2 1 2 3 4 5 6 

 */

function PalindromeTriangle(n){
    for(let i=1;i<=n;i++){

        for(let j=1;j<=n-i; j++){ // this loop for printing space ;
            process.stdout.write(" ");
        }

        for(let j=i;j>=1;j--){ // this loop for decreasing order;
            process.stdout.write(j.toString()); 
        }
        for(let j=2;j<=i;j++){ // this loop for increasing order; and started from 2 bcz 1 will print once;
            process.stdout.write(j.toString());
        }
        console.log()  // this is for changing of line 
    }

}

let n=6;
PalindromeTriangle(n)
