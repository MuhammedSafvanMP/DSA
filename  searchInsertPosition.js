

const searchInsert = (nums, target) => {
    return nums.findIndex(value => value == target)
};

// let nums = [1,3,5,6];
// let target = 5;
let nums = [1,3,5,6],  target = 2

console.log(searchInsert(nums, target));