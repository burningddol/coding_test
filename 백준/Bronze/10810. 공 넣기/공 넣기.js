const fs = require("fs");


const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n");

let basket = [];
const irr = input[0].split(" ")[1]; 
const baskets = input[0].split(" ")[0]; 

for(k=0;k<baskets;k++){
    basket.unshift(0);
}

for(i=0;i<irr;i++){
    const arr = input[i+1].split(" ");
    const [basketStart, basketEnd, ballNum] = [arr[0], arr[1], arr[2]];
    
    const ballNums = []
    for(j=0;j<basketEnd -basketStart +1;j++){
        ballNums.unshift(ballNum);
    }
  
    basket.splice(basketStart-1, basketEnd -basketStart +1, ...ballNums);
  
    
}

console.log(basket.join(" "));