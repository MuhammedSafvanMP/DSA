var numberOfEmployeesWhoMetTarget = function(hours, target) {

    let count = 0;
    for(let i = 0; i < hours.length ; i++){
        if(hours[i] >= target) {
            count ++;
        } 
    }
     return count;
};

// let hours = [0,1,2,3,4], target = 2;

 let  hours = [5,1,4,2,2], target = 6

//  let hours =[98] , target = 5  
console.log(numberOfEmployeesWhoMetTarget(hours, target));
