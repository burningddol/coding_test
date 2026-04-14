const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const count = Number(input[0]);
const list = input[1].split(" ").map(Number);
const sum = Number(input[2]);

list.sort((a,b)=>a-b);

let temp=0;

let head= 0;
let tail= list.length -1;

while(head<tail){

    const sumTemp = list[head] + list[tail]; 
    if(sumTemp === sum){
        head++;
        tail--;
        temp++;
    }
    if(sumTemp > sum){
        tail--;
    }
    if(sumTemp < sum){
        head++;
    }
}


console.log(temp);