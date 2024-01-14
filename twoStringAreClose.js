var closeStrings = function(word1, word2) {
    let splONe = word1.split("").sort();
    let splTWo = word2.split("").sort();
    let result;
    for(let i=0; i<splONe.length; i++){
        for(let j=0; j<splTWo.length; j++){
            if(splONe[i] === splTWo[j] && splONe.length === splTWo.length)
               result = true;
            else 
            result = false;
        }
    }

  return  result 

 };
 
//  let word1 = "a", word2 = "aa";
//  let word1 = "abc", word2 = "acb";
//  let word1 = "cabbba", word2 = "aabbss";
let   word1 = "abbbzcf",  word2 ="babzzcz"
 
 console.log(closeStrings(word1,word2))