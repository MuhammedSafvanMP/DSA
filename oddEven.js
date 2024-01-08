// 4. Given a string, return true if its length is even or false if the length is odd. (score 2)
// Examples:
// oddEven("apples") ➞ true
// // The word "apples" has 6 characters.
// // 6 is an even number, so the program outputs true.
// oddEven("pears") ➞ false
// oddEven("cherry") ➞ true



function oddEven (value) {
  return  value.length %2 === 0 ? true : false ;
}

console.log( oddEven("pears")); 
console.log( oddEven("cherry"));

