var scoreOfString = function(s) {
      
    let result = 0;
      for (let i = 0; i < s.length - 1; i++ ){
         result +=  Math.abs( s.charCodeAt(i) - s.charCodeAt(i + 1))
      }

      return result
};

 let s = "hello"

 console.log(scoreOfString(s));
 
