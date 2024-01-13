let x = 121;
 
var isPalindrome = function(x) {
     let str = String(x);
    let splitStr = str.split("").reverse().join("");
    return Number(splitStr) === x ? true : false;

};

console.log(isPalindrome (x));