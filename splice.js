/*
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
will change the original array.
*/


const numbers = [20, 30, 15, 40, 48, 70, 39, 80];
console.log(numbers);
//remove elements
const partial =  numbers.splice(2,3);
console.log(partial);
console.log(numbers);
//insert new elements
console.log(numbers.splice(2,2,88,99,66));
console.log(numbers);