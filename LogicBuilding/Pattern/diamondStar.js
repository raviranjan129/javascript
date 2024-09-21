/**
     *
    ***
   *****
  *******
 *********
***********
 *********
  *******
   *****
    ***
     *
 */

    function diamondPattern(n){

        //outer loop for handling upper part of the pattern;
        for(let i=1;i<=n;i++){
            //inner loop for printing space;
            for(let j=1;j<=n-i;j++){
                process.stdout.write(" ")
            }
            //inner loop for printing stars;
            for(let j=1;j<=(2 * i)-1;j++){ // 2*i-1 means to how many stars in the each row;
                process.stdout.write("*");
            }
            console.log();  //this will print in the new line;
        }

        //this is outer loop for handling lower part;
        for( i=n-1;i>=1;i--){
            //inner loop to printing space;
for(j=1;j<=n-i;j++){
    process.stdout.write(" ");
}
 //inner loop for printing stars;
for(j=1;j<=(2*i)-1;j++){  // 2*i-1 means to how many stars to be printed in each row;
    process.stdout.write("*")
}

console.log() // for printing in the new line;
        }
    }

    let n=6;
    diamondPattern(n);