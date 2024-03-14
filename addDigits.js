var addDigits = function(num) {
   if (num === 0)
    return 0;
   else
    return 1 + (num - 1) % 9
};

// let num = 38;
// let num = 199;
let num =708538619


console.log(addDigits(num));