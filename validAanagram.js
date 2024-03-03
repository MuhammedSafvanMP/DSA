var isAnagram = function(s, t) {
   let sortS = s.split("").sort();
   let sortT =  t.split("").sort();

   return sortS.join() === sortT.join() ;
};


let s = "anagram", t = "nagaram"



console.log(isAnagram(s, t));