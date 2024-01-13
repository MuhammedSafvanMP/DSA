// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].



let nums = [1,2,3,4];

var runningSum = function(nums) {
    let sum = 0;
    let result = []
    for(let x of nums){
       result.push(sum += x) 
    }
    return result;
};

console.log(runningSum(nums));