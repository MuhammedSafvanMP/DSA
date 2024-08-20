

function sameElementAddLast (arr, target) {
//    let remove = arr.filter((value) => value !== target)
//    let targetValues =  arr.filter((value) => value == target)
//    let result = [remove, targetValues]
//    return result.flat();
let result = [];
let targetValues = [];

for (let value of arr) {
    if (value === target) {
        targetValues.push(value);
    } else {
        result.push(value);
    }
}

return result.concat(targetValues);
}

let arr = [6,1,6,8,10,4,15,6,3,9,6]
let target = 6

console.log(sameElementAddLast(arr, target));

