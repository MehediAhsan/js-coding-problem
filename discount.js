/*
 if ticket numbers less than 100 per price 100tk
 if less than 200 first 100 per price 100tk and second 100tk per price 90tk
 if less than 300 or more first 100 per price 100tk , second 100 per price 90tk and more than 200 per price 70tk
*/


function ticketPrice(quantity){
    const first100rate= 100;
    const second100rate= 90;
    const restTicketRate= 70;
    if(quantity<=100){
        const price = quantity*first100rate;
        return price;
    }
    else if(quantity<=200){
        const first100price = 100*first100rate;
        const restTicketprice = (quantity-100)*second100rate;
        const totalPrice = first100price + restTicketprice;
        return totalPrice;
    }
    else{
        const first100price = 100*first100rate;
        const second100price = 100*second100rate;
        const restTicketprice = (quantity-200)*restTicketRate;
        const totalPrice = first100price + second100price + restTicketprice;
        return totalPrice;
    }
}

const price = ticketPrice(120);
console.log('Ticket price:',price);