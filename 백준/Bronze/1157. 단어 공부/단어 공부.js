const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();


const counts = new Array(26).fill(0);


for (let i = 0; i < input.length; i++) {

  counts[input.charCodeAt(i) - 65]++;
}

let maxCount = 0;
let maxChar = '';
let isDuplicate = false;


for (let i = 0; i < 26; i++) {
  if (counts[i] > maxCount) {
    maxCount = counts[i];
    maxChar = String.fromCharCode(i + 65);
    isDuplicate = false;
  } else if (counts[i] === maxCount && maxCount !== 0) {
    isDuplicate = true;
  }
}


console.log(isDuplicate ? '?' : maxChar);