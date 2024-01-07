// 3.A function that takes an array of objects which includes name and age of family
// members. Find the difference in age between the oldest and youngest family
// members, and return the youngest member’s age, the oldest member’s age and the
// age difference respectively as an array. (Score 2)
// Examples
// ageMembers([
// { name: "John", age: 15 },
// { name: "Steve", age: 50 }]) ➞ [15, 50, 35]
// ageMembers([
// { name: "Mark", age: 38 },
// { name: "Charlie", age: 10 },
// { name: "Anna", age: 25 }]) ➞ [10, 38, 28]
// ageMembers([
// { name: "Rachel", age: 20 },
// { name: "Jennifer", age: 45 },
// { name: "Jack", age: 43 },
// { name: "Maria", age: 3 }]) ➞ [3, 45, 42]

function ageMembers(diffAge) {
    let newArr = [];
      diffAge.map(valu => {
          newArr.push(valu.age);
      })
    
     const min =  Math.min(...newArr);
     const max =  Math.max(...newArr);
      let pushArray = [];
      pushArray.push(min, max, max - min);
  
      return pushArray;
  
    }


console.log(ageMembers([
{ name: "John", age: 15 },
{ name: "Steve", age: 50 }])); 
console.log(ageMembers([
{ name: "Mark", age: 38 },
{ name: "Charlie", age: 10 },
{ name: "Anna", age: 25 }])); 
console.log(ageMembers([
{ name: "Rachel", age: 20 },
{ name: "Jennifer", age: 45 },
{ name: "Jack", age: 43 },
{ name: "Maria", age: 3 }])); 



