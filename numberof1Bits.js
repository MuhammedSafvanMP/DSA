var hammingWeight = function(n) {
  return n.toString(2).replaceAll("0", "").length
};

let n = 00000000000000000000000000001011;


console.log(hammingWeight(n));