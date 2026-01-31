const fs = require('fs');


const numbers = fs.readFileSync('/dev/stdin').toString().split(/\s+/).map(Number);

const maxVal = Math.max(...numbers);


const index = numbers.indexOf(maxVal);
const row = Math.floor(index / 9) + 1;
const col = (index % 9) + 1;


console.log(`${maxVal}\n${row} ${col}`);