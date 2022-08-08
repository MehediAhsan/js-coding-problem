/* 
Returns a copy of a section of an array.
*/

const numbers = [20, 30, 15, 40, 48, 70, 39, 80];
console.log(numbers);
const partial = numbers.slice(2,5);
console.log(partial);
//no change the original array
console.log(numbers);
