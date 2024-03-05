var addStrings = function(num1, num2) {
    let result  = BigInt(num1) + BigInt(num2)
    return result.toString();
};


// let  num1 = "11", num2 = "123"
// let num1 = "456", num2 = "77"
// let num1 = "0", num2 = "0"
let num1 = "9333852702227987", num2 ="85731737104263"


console.log(addStrings(num1,num2));