Promise.reject("Initial Error")
.catch(err =>{throw new Error("New Error");})
.catch(err=>console.log(err.message));


// output : New Error  ;