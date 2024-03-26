var multiply = function(num1, num2) {
    let result = BigInt(num1) * BigInt(num2);
    return result.toString()
};

let  num1 = "2", num2 = "3";
// let num1 = "123", num2 = "456"

console.log(multiply(num1, num2));