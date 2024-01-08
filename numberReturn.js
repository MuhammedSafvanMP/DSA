// Given an array, Return only the numbers into a new array (Score - 2)
// Example:
// onlyNumber([1,”bridgeon”,true,5]) = [1,5]|
// onlyNumber([“10”,false,6,”Ten”]) = [6]


function onlyNumber (arr) {
    let result = [];
    for( let x of arr){
        if(typeof x === "number")
         result.push(x)
    }

    return result;
}


 console.log(onlyNumber([1,"bridgeon",true,5])); 
 console.log(onlyNumber(["10",false,6,"Ten"])); 
