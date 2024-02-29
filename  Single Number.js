var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
};


let nums = [2,2,1];
console.log(singleNumber(nums));