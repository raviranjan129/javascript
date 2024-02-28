



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
    console.log(TeaResult);

    return makingtoast()
 })
 .then( ToastResult =>{
    console.log(ToastResult);
 })
.catch(err =>{
    console.log(" error is logged with",err);
})