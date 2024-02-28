// write a js function named makeTea that simulates the action of making tea. This function should return a Promise that 
//1. Resolves after a delay of 2 seconds,simulatin the time it takes to make tea.
//2 Resolves with the string "Tea is ready!".


const makeTea = function(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Tea is ready!");
        }, 2000);
    })
}

const ans = makeTea();
ans.then(result=>console.log(result));