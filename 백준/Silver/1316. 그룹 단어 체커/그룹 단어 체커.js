const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const usedChars = new Set(); 
  let isGroupWord = true;
  let prevChar = '';

  for (let j = 0; j < word.length; j++) {
    const currentChar = word[j];

    if (currentChar !== prevChar) {
      if (usedChars.has(currentChar)) { 
        isGroupWord = false; 
        break;
      }
      usedChars.add(currentChar); 
    }
    prevChar = currentChar; 
  }

  if (isGroupWord) count++;
}

console.log(count);