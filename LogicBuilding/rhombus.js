/**
    ******
    ******
   ******
  ******
 ******
******

 */ 

function rhombus(n){ 

    //outer loop
    for(let i=1;i<=n;i++){
//inner loop for printing space;
    for(let j=1;j<=n-i;j++){
        process.stdout.write(" ");
    }
    //inner loop to print *;
    for(let j=1;j<=n;j++){
        process.stdout.write("*");
    }

    console.log();
    }
}

let n=6;

rhombus(n);