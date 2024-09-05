function doSomething(task){
    console.log("initialising do something");
    setTimeout(() => {
        console.log("Timer done and task done",task)
    }, 3000);
    console.log("exitting do something after initialising a timer")
}
doSomething("complete Homework")


/**
 * when function starts executing in the call stack ,it will pring 1>initialising do something 2>exitting do something and the timer function goes to runtime environment and after that the doSomething function pop out from the callstack . after 3 second the cb fun comes into macro task queue and then call stack but task varible is outer scope of timer function then how it can access the task variable??? .
 * Closures -> closures is the meachanism having which a function remembers variables which might not be present in its local scope.
 * In closure , we close over variable instead of snap shotting the variable;
 */



function outer(){
    let i=0;

    function inner(){
        i +=1;

    }
    return inner;
}

let x=outer();

console.log(typeof(x))