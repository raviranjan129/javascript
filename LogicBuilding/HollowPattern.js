/*
******
*    *
*    *
*    *
*    *
******
*/



function HollowPattern(n){
    for (let i=0; i<n;i++){
        let row ="";
        for (let j=0;j<n;j++){
            if(i==0 || j==0 || i==n-1 || j==n-1){
                row +="*"
            }else{
                row +=" ";
            }
        }
        console.log(row)
    }
    
}

let n=6;

HollowPattern(n)