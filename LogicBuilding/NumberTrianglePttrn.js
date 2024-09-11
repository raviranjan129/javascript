/**
 *      1
 *     2 2
 *    3 3 3
 *   4 4 4 4
 *  5 5 5 5 5
 * 6 6 6 6 6 6
 */

function NumberTriangle(n){

    //outer loop for handling the number of rows
    for (let i=1;i<=n;i++){
        // inner loop for handling the number of columns;
        for(let j=1;j<=i;j++){
            process.stdout.write(i + " ")  //this will print in same line;
        }
console.log() // this is for changing the line;
    }
    
}

let n=6;
NumberTriangle(n)