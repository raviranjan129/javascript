/**
*******
*******
*******
*******
*******
*******
*******
 */

function squarefill(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j++){
            process.stdout.write("*");
        }

        console.log()
    }
}

let n=6;
squarefill(n)