// find the cheapest phone from an array of phone objects

const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 35000, color: 'black'},
    { name: 'Vivo', camera: 12, storage: '32gb', price: 30000, color: 'silver'},
    { name: 'iphone', camera: 12, storage: '32gb', price: 60000, color: 'black'},
    { name: 'oppo', camera: 12, storage: '32gb', price: 20000, color: 'white'},
    { name: 'realme', camera: 12, storage: '32gb', price: 18000, color: 'black'},
    { name: 'xaomi', camera: 12, storage: '32gb', price: 25000, color: 'golden'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i=0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);