/**
 1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1 
0 1 0 1 0 1 
 */

function OneZeroPtrn(n){
    for(let i=1;i<=n;i++){

        for(let j=1;j<=i;j++){
            if((i+j)%2 ==0){
                process.stdout.write(1 + " ")
            }else{
                process.stdout.write(0 + " ")
            }
        }
        console.log()
    }
}

let n=6;
OneZeroPtrn(n)