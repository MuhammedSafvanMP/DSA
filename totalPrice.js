// 1.Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a
// price. (Score 2)
// Examples
// totalPrice([
// { product: "Milk", quantity: 1, price: 10 }
// ]) ➞ 10
// totalPrice([
// { product: "Milk", quantity: 3, price: 10 },
// { product: "Biscuit", quantity: 1, price: 20 }
// ]) ➞ 50
// totalPrice([
// { product: "Milk", quantity: 1, price: 10 },
// { product: "Eggs", quantity: 12, price: 5 },
// { product: "Bread", quantity: 2, price: 20 },
// { product: "Cheese", quantity: 1, price: 30 }
// ]) ➞ 140


function totalPrice (items) {
    let price = [];
    let quantity = [];
    items.forEach(item => {
        quantity.push(item.quantity);
        price.push(item.price);
    });


        let multipla = [];
    for(let i =0; i<quantity.length; i++){
            multipla.push(quantity[i] * price[i]);
    }



  const sum = multipla.reduce((acc,val) => {
         return   acc + val
    }, 0)

    return sum;
}


console.log(totalPrice([
    {product: "milk", quantity: 3, price: 10},
    {product: "biscut", quantity: 1, price: 20},
]));


console.log(totalPrice([
{ product: "Milk", quantity: 1, price: 10 }
]));

console.log(totalPrice([
{ product: "Milk", quantity: 1, price: 10 },
{ product: "Eggs", quantity: 12, price: 5 },
{ product: "Bread", quantity: 2, price: 20 },
{ product: "Cheese", quantity: 1, price: 30 }
])); 