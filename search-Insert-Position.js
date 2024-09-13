var searchInsert = function(nums, target) {

     let index = nums.indexOf(target)
    if(index == -1){
      nums.push(target)
       nums.sort((a,b) => a - b)
       return nums.indexOf(target)
    } 
    
    return index;
            
};

let nums = [1,3,5,6], target = 5
// let nums = [1,3,5,6], target = 7
// let nums = [1,3,5,6], target = 2


console.log(searchInsert(nums, target));