var differenceOfSums = function(n, m) {
    let num1 = [0];
    let  num2 = [0]
    for(let i = 1 ; i <= n; i++){
        if(i % m == 0)  num1[0] + num1.push(i)
        else  num2[0] + num2.push(i)
    }   

  let result1 =  num1.reduce((acc, curvalue) => acc + curvalue, 0)   
  let result2 = num2.reduce((acc, curvalue) => acc + curvalue, 0);

  return result2 - result1;

};  

let n = 5, m = 1


console.log(differenceOfSums(n, m));
