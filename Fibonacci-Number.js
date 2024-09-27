var fib = function(n) {
    if(n <  2) return n;
    let prev = 0, curr = 1, next;
   for(let i = 2; i<= n ; i++){
       next = prev + curr;
       prev = curr;
       curr = next    
   }

   return next
};

// fibnochi   0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
//3 + 5 = 8

let n = 6
console.log(fib(n));
