
const userId= 123;
let userName="Ravi";
var UserEmail="ravi454@gmail.com";

let name; // it will give undefined bcz it is declared but not initilized;


// userId=45;  //user id is declared with const it means you can't redeclare ur variable  bcz it is a block scope;

userName="Gaurav";  // when we re declare our variable with let then it will be updated bcz it is a Block scope;
UserEmail="rk64@gmail.com" //varaiable declared with var is global scope;

console.log(userId)

console.table([userName,UserEmail,name])