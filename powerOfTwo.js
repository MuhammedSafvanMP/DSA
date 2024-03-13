var isPowerOfTwo = function(n) {
     let i = 1;
     while(n > i){
        i *= 2
     }
     return n === i
};


let n = 16

console.log(isPowerOfTwo(n));