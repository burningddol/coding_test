const fs = require('fs');


const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);

const n = parseInt(input[0]); 
const m = parseInt(input[1]); 


const unheard = new Set();
for (let i = 2; i < n + 2; i++) {
    unheard.add(input[i]);
}

const result = [];
for (let i = n + 2; i < n + m + 2; i++) {
    if (unheard.has(input[i])) {
        result.push(input[i]);
    }
}


result.sort();

console.log(result.length);
console.log(result.join('\n'));