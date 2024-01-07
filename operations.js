// 4.Create a function that takes a string as input, it contains only the characters “i”, “d”
// and “s”. There is a variable total (the initial value of total is 0).
// i :- increments the value of the variable total by 1.
// d :- decrements the value of the variable total by 1.
// s :- squares the value of the variable total.
// Return the final value of total after performing all the operations. (Score 2)
// Examples
// operations(“iiisd”) ➞ 8
// operations(“dsdi”) ➞ 1
// operations("iiss") ➞ 16


function operations(opra) {   
     let num = 0;
    for(let x of opra){
        if(x === "i")
        num++;
        else if(x === "s")
        num *= num
        else if(x === "d")
        num--;
    }

    return num;
}




console.log(operations("iiisd")); 
console.log(operations("dsdi") );
console.log(operations("iiss") );