const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  const line = input[i].trim().split(' ');


  const R = parseInt(line[0]); 
  const S = line[1];           
  
  const P = S.split('').map(char => char.repeat(R)).join('');
  
  console.log(P);
}