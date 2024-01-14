var isPalindrome = function(s) {
    let result = s.split("").filter(val => /[a-zA-Z0-9]/.test(val));
    let newStr = result.join("").toLowerCase()
    let reverStr = result.reverse().join("").toLowerCase();
   return  newStr === reverStr ? true : false
};

let s = "A man, a plan, a canal: Panama"
// let s = "race a car";
// let s ="a.";
console.log(isPalindrome(s));