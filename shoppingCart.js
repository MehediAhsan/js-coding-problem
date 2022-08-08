const shoppingCart = [
    { name: 'shirt', price: 1500, quantity: 4 }, 
    { name: 'pant', price: 1200, quantity: 3 }, 
    { name: 'shoes', price: 2000, quantity: 2 }, 
    { name: 'belt', price: 500, quantity: 5 }, 
];

function totalCost(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        const product = products[i];
        const totalProduct = product.price * product.quantity;
        sum += totalProduct;
    }
    return sum;
}

const totalPrice = totalCost(shoppingCart);
console.log('Total Price: ',totalPrice);