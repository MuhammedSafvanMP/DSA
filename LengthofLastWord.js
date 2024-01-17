var lengthOfLastWord = function(s) {
    let newStr = s.trim().split(" ").reverse();
    return newStr[0].length;
};

let s = "   fly me   to   the moon  " 

console.log(lengthOfLastWord(s))