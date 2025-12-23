const fs = require("fs");


const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n");

const total = Number(input[0]);

let star= "*";
let space=""
for(i=1;i<total+1;i++){
    
    for(j=1;j<=total-i;j++){
        space += " ";
    }
    console.log(space+star);
    star+="*";
    space="";
}
