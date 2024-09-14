var findWordsContaining = function(words, x) {
    let arry = []
      for(let i = 0; i < words.length; i++){
          if(words[i].indexOf(x) >= 0)  arry.push(i)          
      }
  
      return arry;
  };
  
  // let  words = ["leet","code"], x = "e"
  
  
  let  words = ["abc","bcd","aaaa","cbc"], x = "a"
  
  console.log(findWordsContaining(words, x));
  