const department = ['cse','eee','ce','me'];
const number = 10;
console.log(typeof department);
//check the array
console.log('Is array or not:');
console.log(Array.isArray(department));
console.log(Array.isArray(number));

//includes
console.log('Includes or not:');
console.log(department.includes('cse'));
console.log(department.includes('eee'));

//index of array
console.log(department.indexOf('ce'));

if(department.indexOf('ce') !== -1){
    console.log('Exist');
}

//concat:

const newDepartment = ['math','physics','chemistry'];
const allDepartment = department.concat(newDepartment);
console.log(allDepartment);