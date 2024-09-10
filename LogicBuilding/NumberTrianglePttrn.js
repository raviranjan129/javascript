/**
 *      1
 *     2 2
 *    3 3 3
 *   4 4 4 4
 *  5 5 5 5 5
 * 6 6 6 6 6 6
 */

function NumberTriangle(n){
    for(let i=1;i<=n;i++){
        for(let j=1; j<=n-i;j++){
            console.log("")
        }
        for(let j=1;j<=i;j++){
            process.stdout.write(i + "")
        }
        console.log()
    }
    
}

let n=6;
NumberTriangle(n)