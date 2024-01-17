var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
};


let nums = [2,2,1];
console.log(singleNumber(nums));