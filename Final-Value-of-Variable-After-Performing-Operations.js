
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let i = 0; i < operations.length ; i ++){
     if(operations[i] == '--X') --x
        else if(operations[i] == 'X--') x--
            else if(operations[i] == '++X') ++x
                 else if(operations[i] == 'X++') x++
    }
    
    return  x;
};


let operations = ["++X","++X","X++"];


console.log(finalValueAfterOperations(operations));