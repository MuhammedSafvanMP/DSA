var getConcatenation = function(nums) {
    let result = [...nums, nums]
     return result.flat()
  };
  
  let nums = [5, 8, 1, 9, 9, 18, 16, 1, 11, 6, 8, 10];
  
  console.log(getConcatenation(nums));
  