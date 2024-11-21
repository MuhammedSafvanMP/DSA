var countSegments = function(s) {
 
    if(s.trim()){
      return s.split(" ").filter(value => value !== "").length
    }else{
      return  0
    }
};


// let  s = "Hello, my name is John"
// let s =""
// let s = "                "
let s= "Of all the gin joints in all the towns in all the world,   "

console.log(countSegments(s))
