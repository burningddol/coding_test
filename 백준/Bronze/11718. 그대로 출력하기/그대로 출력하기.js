const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const length = input.length;

for(i=0;i<length;i++){
    console.log(input[i]);
}