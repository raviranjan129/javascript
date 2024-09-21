/**
1 2 3 4 5 6 
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 
 */

function NumberReversePyramid(n){
    for(let i=n; i>=1;i--){
for (let j=1;j<=i;j++){
    process.stdout.write(j + " ");
}
        console.log()
    }
}
let n=6;
NumberReversePyramid(n) 