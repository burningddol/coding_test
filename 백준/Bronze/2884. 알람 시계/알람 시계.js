const fs = require("fs");

let [A,B] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);


let temp = B - 45;

if(temp<0) {
    (A-1)<0 ? A=23 : A-=1 
    B=60+temp;
} else {
    B-=45;
}
console.log(`${A}`+ ` ${B}`);