var isPalindrome = function(x) {

    let s = x.toString().split("")
   let revers = s.reverse();
   return   x == Number(revers.join(""))
};

let x = 10
// Output: true

console.log(isPalindrome(x));
