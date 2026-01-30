const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0]); 
const numbers = input[1].trim(); 

let sum = 0;


for (let i = 0; i < numbers.length; i++) {
  sum += parseInt(numbers[i]);
}

console.log(sum);