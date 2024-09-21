/**
     *
    * *
   *   *
  *     *
 *       *
***********
 */ 

function HollowTriangle(n){
    for(let i=1;i<=n;i++){
        let k;
        for(let j=1; j<=n-i;j++){
            process.stdout.write(" ");
        }
        for( k=1; k<=2 * i -1; k++){ // loop for printing star/space 
           if(k==1 || i ==n || k==(2 * i - 1)){  //  (k== 2 * i - 1) means stars will be prints on the end of each row; and k==1 stars at beg. of each row;
            process.stdout.write("*")
           }else{
            process.stdout.write(" ")
           }
        }
        console.log();
    }
}

let n=6;
HollowTriangle(n)