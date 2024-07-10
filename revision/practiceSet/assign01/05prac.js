function first(callback) {
    setTimeout(() => {
        console.log("first");
        callback();
    }, 500);
}
function second() {
    console.log("second");
}
first(second);

// output is first,second

//explanation;  in this code the first function is expecting another function as an argument, first is HOF, hence output is first then it execute the second function and print second;