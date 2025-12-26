const fs = require("fs");


const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n");




const arr = input.map(Number);



let max = arr[0];
for (const num of arr){
    if(max>num){
      
    } else {max = num;
          }
}




console.log(max);
console.log(arr.indexOf(max)+1);