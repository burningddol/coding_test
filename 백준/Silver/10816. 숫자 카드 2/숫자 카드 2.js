const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const cardCount = Number(input[0]);
const cards = input[1].split(" ").map(Number);
const numberCount = Number(input[2]);
const numbers = input[3].split(" ").map(Number);

const cardMap = {};

cards.forEach((card)=>{
    cardMap[card] = (cardMap[card] || 0) + 1;
    
})


const result = numbers.map((num)=> cardMap[num] || 0 ) 
      
console.log(result.join(" "));