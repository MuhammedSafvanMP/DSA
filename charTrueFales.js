// Create a function that takes two strings as arguments and returns either true or false
// depending on whether the total number of characters in the first string is equal to the
// total number of characters in the second string. (score 2)
// Examples
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "bridgeon") ➞ false


function comp (char1, char2) {
   let split1 = char1.split("");
   let split2 = char2.split("");

    return split1.length === split2.length ? true : false;
}

 console.log(comp("AB", "CD"));
 console.log(comp("ABC", "DE")); 
 console.log(comp("hello", "bridgeon")); 
