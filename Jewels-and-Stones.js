var numJewelsInStones = function(jewels, stones) {
    let array = [];
    for (let i = 0; i< jewels.length; i++){
        for(let j = 0; j < stones.length; j++){
              if(stones[j] === jewels[i] )  array.push(stones[j])
        }
    }

    return array.length
};

// let jewels = "aA", stones = "aAAbbbb";

let jewels = "z", stones = "ZZ"

console.log(numJewelsInStones(jewels, stones));

// time and sapce 
// O(m)