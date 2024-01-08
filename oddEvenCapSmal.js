// Given a string, capitalize the letters that occupy even indexes and odd indexes
// separately, and return as shown below. (Score - 3)
// Example:
// capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
// capitalize(“bridgeon”) = [“BrIdGeOn” , “bRiDgEoN”]


function capitalize (odEv) {
    let split = odEv.split("");
    let val1 = [];
    let val2 = [];
   for(let x in split){
       val1.push( x %2 === 0 ? split[x].toUpperCase() : split[x].toLowerCase());
       val2.push( x %2 === 0 ?  split[x].toLowerCase()  : split[x].toUpperCase());
   

   }


   let result = [val1.join(""),val2.join("")];
   
   return result;

}

console.log( capitalize("abcdef")  ); 
console.log( capitalize("bridgeon"));

