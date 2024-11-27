var minElement = function(nums) {
    
        let multiArray =   nums.map(num => [num.toString().split('').reduce((acc, value) => acc + Number(value), 0)]);
        
    return Math.min(...multiArray)
};


let nums = [10,12,13,14];

console.log(minElement(nums))
