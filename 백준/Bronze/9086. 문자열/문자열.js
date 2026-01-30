const fs = require('fs');


const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = parseInt(input[0]); 

for (let i = 1; i <= T; i++) {
  const S = input[i].trim(); 
  
  if (S.length > 0) {
  
    console.log(S[0] + S[S.length - 1]);
  }
}