var sortColors = function(nums) {
    return nums.sort((a,b) => a - b);
};


let  nums = [2,0,2,1,1,0];

console.log(sortColors(nums));