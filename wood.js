/**
 per item wood requirements
chair = 3 cft
table = 10 cft
bed = 50 cft
 input : quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalwood = chairWood + tableWood + bedWood;
    return totalwood;
}

const totalwood = woodCalculator(1, 1, 1);
console.log('Total Wood Require:',totalwood);