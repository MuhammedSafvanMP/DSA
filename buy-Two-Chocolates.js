var buyChoco = function(prices, money) {

    let sort =  prices.sort((a, b) => a - b);

    for (let i = 0; i < sort.length; i++) {
        for (let j = i + 1; j < sort.length; j++) {
            let sum = sort[i] + sort[j];
            if (sum <= money) return money - sum;
        }
    }
    
    return money;
};

 let prices = [98,54,6,34,66,63,52,39], money = 62;


 console.log(buyChoco(prices, money));
 

