var subtractProductAndSum = function(n) {
    let splitN = n.toString().split("")
   let multy = splitN.reduce((acc, cava) => Number(acc * cava))
   let conInt = splitN.map((val) => Number(val))
   let addition = conInt.reduce((acc, cava) => acc + cava)
    
    return  multy - addition

};

let  n = 234
console.log(subtractProductAndSum(n));


// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15