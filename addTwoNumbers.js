// var reverse = function(x) {
//      return x.toString().split("").reverse((a,b) => a - b).join("")
// };

// let  x = -123;



// console.log(reverse(x));



// 1)


// function sumOfNaturalNumbers (num) {
//      return num * (num + 1) / 2;
// }


// console.log(sumOfNaturalNumbers(10));


var getSum = function(a, b) {
     // return    (a ^ b (a & b) << 1)
     // let c = a , b;
     //  let sum = << a 
     // return a * 
     // return (a ^ b, (a & b) << 0)
     if (b == 0) {
          return a;
      } else {
          return getSum(a ^ b, (a & b) << 1)
      }
}
  console.log( getSum(1, 2));