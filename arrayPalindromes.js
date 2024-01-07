// 2. Write a function that takes an array of strings as input and returns a new array with
// only the strings that are palindromes. (Score 3)
// Examples
// checkPalindromes(["mom", "bridgeon", "madam"]) ➞ ["mom", "madam"]
// checkPalindromes(["malayalam", "deed", "hello", "peep", "jump"]) ➞ ["malayalam",
// "deed", "peep"]
// checkPalindromes(["rotator","level"]) ➞ ["rotator","level"]


function checkPalindromes (items) {
   const palindrom = items.filter(val => {
       const revers =  val.split("").reverse().join("");
       return revers ===  val;
    })

    return palindrom;
        
}



 console.log(checkPalindromes(["mom", "bridgeon", "madam"]));
 console.log(checkPalindromes(["malayalam", "deed", "hello", "peep", "jump"]));
 console.log(checkPalindromes(["rotator","level"]));


