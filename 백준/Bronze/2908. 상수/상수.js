const fs = require('fs');


const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');


const reverseNumber = (str) => {

  return Number(str.split('').reverse().join(''));
};

const reversedA = reverseNumber(A);
const reversedB = reverseNumber(B);


console.log(reversedA > reversedB ? reversedA : reversedB);