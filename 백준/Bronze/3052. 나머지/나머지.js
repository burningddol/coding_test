const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);
const remainder = input.map((a)=>a%42);

let nextRemainder = [...remainder];

let temp = 0;
for(const a of nextRemainder) {

    nextRemainder = nextRemainder.filter((arr)=> {

        if(!temp && arr==a) {temp++; return 1;}
        if( arr!==a){ return 1;}
        if(temp && arr==a) return 0;
        });
 temp=0;
}

console.log(nextRemainder.length);