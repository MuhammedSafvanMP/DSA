// 4.Create a function that takes an array of strings as input. The array contains “++X”,
// “X++”, “--X” and “X--”. The initial value of X is 0.
// ++X and X++ :- increments the value of the X by 1.
// --X and X-- :- decrements the value of the X by 1.
// Return the final value of X after performing all the operations. (Score 2)
// Examples
// operations(["--X","X++","X++"]) ➞ 1
// operations(["++X","++X","X++"]) ➞ 3
// operations(["X++","++X","--X","X--"]) ➞ 0



function operations (items) {
    let x = 0;
    for(let y of items){
       
        if(y === "X++" || y === "++X")
        x++;
        else if(y === "X--" || y === "--X")
        --x;
    }

    return x;

}

console.log(operations(["--X","X++","X++"]));
console.log(operations(["++X","++X","X++"])); 
console.log(operations(["X++","++X","--X","X--"])); 


