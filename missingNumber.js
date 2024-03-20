var missingNumber = function(nums) {
   let missingNum = 0
    let total = 0
    for(let i = 0; i < (nums.length + 1) ; i++){
        total += i

        if(nums[i])
            missingNum += nums[i] 
    }

    return total - missingNum

};

let nums = [3,0,1];

console.log(missingNumber(nums));