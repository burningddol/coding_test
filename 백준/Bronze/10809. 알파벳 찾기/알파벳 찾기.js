const fs = require('fs');
const S = fs.readFileSync('/dev/stdin').toString().trim();

const result = [];


for (let i = 97; i <= 122; i++) {
  const char = String.fromCharCode(i); 
  result.push(S.indexOf(char)); 
    
}


console.log(result.join(' '));