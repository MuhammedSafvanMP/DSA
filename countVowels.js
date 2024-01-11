// Create afunction ysing the "function" keyword that takes astring as an argument & retruns the numbers of vowels in hte string

function countVowels (str) {
    let count = 0;
    for (let char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        count ++;
    }

    return count;
}


console.log(countVowels("muhammed safvan mp"));