var moveZeroes = function(nums) {
    
    let index  = 0
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
      temp = nums[index]
      nums[index] = nums[i]
      nums[i] = temp
      index++
    }
    
   
  }
  
  return nums;  
};

let nums = [0,1,0,3,12];
// let nums = [0]

console.log(moveZeroes(nums));