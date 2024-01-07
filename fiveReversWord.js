// 1.Write a function that takes in a string of one or more words, and returns the same
// string, but with all five or more letter words reversed. (Score 3)
// Examples
// spinWords( "Hey fellow warriors" ) ➞ "Hey wollef sroirraw"
// spinWords( "This is a test") ➞ "This is a test"
// spinWords( "This is another test" ) ➞ "This is rehtona test"


function spinWords(word) {
    let split = word.split(" ");
    let arr = [];

    for (let x of split) {
        if (x.length >= 5) {
            arr.push(x.split("").reverse().join(""));
        } else {
            arr.push(x);
        }
    }

    return arr.join(" ");
}



console.log(spinWords( "Hey fellow warriors" ));
console.log(spinWords( "This is a test"));
console.log(spinWords( "This is another test" )); 
