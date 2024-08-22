

function palindrome(input){
    let str=input.toString().toLowerCase();

    let left=0;
    let right=str.length-1;

    while(left<=right){
        if(str[left] !== str[right]){
            console.log(" Not Palindrome");
            return;
        }
        left++;
        right--;
    }
    console.log("Palindrome")
}

let n= "madam";
palindrome(n)

let  num=123;
palindrome(num)

let num2=121;
palindrome(num2)