const fs = require('fs');


const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const S = input[0];    
const i = parseInt(input[1]); 


console.log(S[i - 1]);