var singleNumber = function(nums) {
    let result = 0
    for(let i = 0; i < nums.length; i ++){
        result ^= nums[i];
    }
    return result
};



let nums =  [1]

console.log(singleNumber(nums));

