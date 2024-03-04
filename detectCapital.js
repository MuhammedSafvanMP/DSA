var detectCapitalUse = function(word) {

   if (word === word.toLowerCase() || word === word.toUpperCase() || (word.charAt(0) === word.charAt(0).toUpperCase() && word.substring(1) === word.substring(1).toLowerCase())) 
      return true;
   
   else
       return false;

}
// let word = "USbA"; // flase
// let word = "USA"; // true
// let word = "Leetcode"; // true
let  word = "g"; // true

console.log(detectCapitalUse(word));
