var isPowerOfFour = function(n) {
    let i = 1;
    while(n > i){
        i *= 4;
    }

    return i === n;

}


let  n = 16;

console.log(isPowerOfFour(n));