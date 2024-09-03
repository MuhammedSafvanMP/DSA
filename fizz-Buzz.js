var fizzBuzz = function(n) {
    let  fizz = "Fizz";
    let buzz = "Buzz";
    let fizzBuzz= "FizzBuzz"
    let arr = []
   for(let i =1; i<= n; i++){
    if(i %3 === 0 &&  i %5 === 0) arr.push(fizzBuzz) 
    else if(i %5 == 0) arr.push(buzz)
    else if(i %3 === 0)  arr.push(fizz)
    else arr.push(i.toString())
   }

   return arr;
};


let n = 15;

console.log(fizzBuzz(n));






