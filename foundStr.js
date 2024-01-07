// 3. Given an array, Return only the string into a new array (Score - 2)
// Example:
// onlyNumber([1,"bridgeon",true,"solutions"]) = [“bridgeon","solutions"]
// onlyNumber([“10",false,6,"Ten"]) = [“10","Ten"]


function onlyNumber (str) {
   let result = str.filter(value => typeof value === "string");
   return result;
}

console.log(onlyNumber([1,"bridgeon",true,"solutions"]));
console.log(onlyNumber(["10",false,6,"Ten"]));
