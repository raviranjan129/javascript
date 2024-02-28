



const makeTea = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Tea is ready!");
        }, 2000);
    })
}

const makingtoast = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Toast is ready")
        }, 3000);
    })

}
 makeTea()
 .then(TeaResult=>{
    console.log(TeaResult); // output :Tea is ready

    return makingtoast() //Return the promise of making toast
 })
 .then( ToastResult =>{
    console.log(ToastResult); //output :Toast is ready;
 })
.catch(err =>{
    console.log(" error is logged with",err);  // Handle any errors in the promise chain;
})