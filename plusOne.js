var plusOne = function(digits) {

  let  conString = digits.join("");
  let  number = BigInt(conString) + 1n;
 
  let result = number.toString().split('');
  return result   
};

let digits = [1,2,3]

console.log(plusOne(digits));