var sortSentence = function(s) {
    
   
    
   let order = s.split(" ").sort((a, b) => a.split("")[a.length-1] - b.split("")[b.length-1]);
   
   
   return order.map((val)=> val.substring(0, val.length - 1)).join(" ")
   
};


let s = "is2 sentence4 This1 a3";

console.log(sortSentence(s))
