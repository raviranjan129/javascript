/**
* * * * * * 
 *       * 
  *     * 
   *   * 
    * * 
     * 
    * * 
   *   * 
  *     * 
 *       * 
* * * * * * 
 */

function hourglassPattern(n){
    for(let i=1;i<=n;i++){
        for(let j=1;j<i;j++){
            process.stdout.write(" ");
        }
        for(let j=i;j<=n;j++){
if(j==i || j==n || i==1){
    process.stdout.write("* ")
}else{
    process.stdout.write("  ")
}
        }
        console.log()
    }
    for(let i=n-1;i>=1;i--){
        for(let j=1;j<i;j++){
            process.stdout.write(" ")
        }
        for(let j=i;j<=n;j++){
            if(j==i || j==n || i==1){
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }
        console.log()
    }
}
let n=6;
hourglassPattern(n)
