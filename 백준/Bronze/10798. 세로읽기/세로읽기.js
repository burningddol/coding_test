const fs = require('fs');

const words = fs.readFileSync(0).toString().trim().split('\n').map(s => s.trim());

let result = '';


for (let i = 0; i < 15; i++) {
  words.forEach(word => {
    if (word[i] !== undefined) result += word[i];
  });
}

console.log(result);