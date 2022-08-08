const persons = ['mehedi', 'rakib', 'sohan', 'mehedi', 'rakib', 'emon', 'sohan','mehedi'];

function removeDuplicate(names){
    const unique = [];
    for(let i=0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;   
}

const uniquePerson = removeDuplicate(persons);
console.log(uniquePerson);