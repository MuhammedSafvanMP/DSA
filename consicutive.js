// 1. Given an array of numbers. Create a function to find the non consecutive numbers
// and return it as an array. (Score - 3)
// Example:
// Input: arr([1,2,3,4,6,7,8]) Output: [6]
// Input: arr([10,11,12,20,21,22,30]) Output: [20,30]


function arr (value) {

    let result = [];
    for(i=0; i<value.length-1; i++){
        if(value[i+1] - value[i] !== 1)
            result.push(value[i+1])
    }

    return result;
}

console.log( arr([1,2,3,4,6,7,8]));
console.log( arr([10,11,12,20,21,22,30]));

