
var containsDuplicate = function(nums) {
   let arra = [...new Set(nums)]
  return arra.length === nums.length ? false : true;
};


let nums = [1,2,3,4];

console.log(containsDuplicate(nums));
