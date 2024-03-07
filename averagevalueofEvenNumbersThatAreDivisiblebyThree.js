var averageValue = function(nums) {
    let EVEN = nums.filter((val) => val %2 == 0 && val %3 ==0)
    if(EVEN.length > 0){
        if(EVEN.length==1 ){
            return EVEN[0]
        }
            else{
                
                let add = EVEN.reduce((acc, val) => acc + val, 0)
                return add ? Math.floor( add / EVEN.length) : add
            }

            }
             else{
            return 0
        }
    }
   



// let nums = [1,3,6,10,12,15]
// let nums  = [9,3,8,4,2,5,3,8,6,1]
let nums =
[94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21]

console.log(averageValue(nums));