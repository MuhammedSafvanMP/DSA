const largestNumberInArray = (array) => {
  return array.map(value => Math.max(...value))
}


console.log(largestNumberInArray([[1,2,4], [78, 32, 89], [67, 79, 23]]));