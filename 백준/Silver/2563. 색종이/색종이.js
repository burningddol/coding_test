const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]); 

const paper = Array.from(Array(100), () => Array(100).fill(0));

let count = 0;

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(' ').map(Number);


  for (let row = x; row < x + 10; row++) {
    for (let col = y; col < y + 10; col++) {

      if (paper[row][col] === 0) {
        paper[row][col] = 1;
        count++;
      }
    }
  }
}


console.log(count);