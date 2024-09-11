

function NumberIncPyramid(n){

    //outer loop for handling the number of row;
    for(let i=1;i<=n;i++){
// inner loop for handling the number of columns;
        for(let j=1;j<=i;j++){
            process.stdout.write(j + " ")
        }
        console.log()
    }
}
let n=6;
NumberIncPyramid(n)