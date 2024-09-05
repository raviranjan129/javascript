function customIterator(arr){
    let idx=0;

    function next(){
        if(idx == arr.length){
            return {value:undefined,done:true};
        }
        const nextElement = arr[idx];
        idx++;

        return {value:nextElement,done:false}
    }
    return {next}
}

let x=customIterator([1,2,3,4,5]);

console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
// console.log(x.next())
// console.log(x.next())



/**
 * programing -> 1>imperative 2>declarative
 * imperative :you can just need to say what to do and how to do ,like defining array and accessing each elem of the array using the loop ;
 * 
 * declarative: you just need to say what to get;
 */

/**
 * iterator-> a declaratives way of fetching data
 * iterator object has-> {value:,done:,next}
 * 
 * value:which value we are pointing at 
 * next:function using which we can get the iterator object : {value,done} property;
 * 
 * done: tells if more value can be fetched or not;
 */