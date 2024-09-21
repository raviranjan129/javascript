/**
 1 2 3 4 5 6 
 2 3 4 5 6 
  3 4 5 6 
   4 5 6 
    5 6 
     6
 */

     function reverseTrianglePtrn(n){
        for(let i=1;i<=n;i++){

            for(let j=1; j<i ;j++){
                process.stdout.write(" ")
            }
            for( j=i;j<=n;j++){
                process.stdout.write(j.toString() + " ");
            }
            console.log()
        }
     }

     let n=6;
     reverseTrianglePtrn(n);
     