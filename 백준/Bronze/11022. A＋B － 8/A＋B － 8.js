const fs = require("fs");


const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n");

const total = Number(input[0]);

let sumList=null ;

for(i=1;i<total+1;i++){
    const [A,B] = input[i].split(" ").map(Number);
    if(i!=1){
    sumList+=`Case #${i}: ${A} + ${B} = `+(A+B) +"\n";
    }else{
    sumList= `Case #${i}: ${A} + ${B} = `+(A+B) +"\n";}
}
console.log(sumList)


