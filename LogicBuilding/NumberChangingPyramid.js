/**
 * 1 
   2 3 
   4 5 6 
   7 8 9 10 
   11 12 13 14 15 
   16 17 18 19 20 21 
 */

   function NumberChangePyramid(n){
    let k=1;

    for(let i=1;i<=n;i++){
       
        for(let j=1;j<=i;j++){
            process.stdout.write(k + " ");
            k++;
        }
        console.log()
    }
   }

   let n=6;
   NumberChangePyramid(n)