// 2. Given a string with both capital and small letters, return two arrays where the first
// array only contains capital letters and another one with small letters.(Score - 3)
// Example:
// Scrambled("bridGEON")➞[["brid"],["GEON"]]
// Scrambled("MICROsoft")➞[["soft"],["MICRO"]]
// Scrambled("FacEBoOK")➞[["aco"],["FEBOK"]]


function Scrambled (itmes) {
     let split = itmes.split("")
    let lower = [];
    let capit = [];
    split.forEach(value => {
        if(value === value.toLowerCase())
            lower.push(value)
        else if(value === value.toUpperCase())
            capit.push(value)
    });


    let result = [lower.join("").split(" "), capit.join("").split(" ")];
    
    return result;
    
}

console.log(Scrambled("bridGEON"));
console.log(Scrambled("MICROsoft"));
console.log(Scrambled("FacEBoOK"));
