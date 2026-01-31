const fs = require('fs');


const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);


const correctPieces = [1, 1, 2, 2, 2, 8];


const result = correctPieces.map((count, index) => count - input[index]);

console.log(result.join(' '));