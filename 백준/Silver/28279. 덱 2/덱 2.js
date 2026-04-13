const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


const count = Number(input[0]);



const list =new Array(2000000);
let head = 1000000;
let tail = 1000000;


const result = [];

for (i=1;i<input.length;i++){
    const temp = input[i].trim().split(" ").map(Number);

    switch(temp[0]){
        case 1: 
            list[--head] = temp[1];
            break;
        case 2:
            list[tail++] = temp[1];
            break;
        case 3:
            result.push((head === tail) ? -1 : list[head++]);
            
            break;
        case 4: 
            result.push((head === tail) ? -1 : list[--tail]);
            list[tail] = 0;
            break;
        case 5:
            result.push(tail-head);
            break;
        case 6:
            result.push((head === tail)? 1: 0);
            break;
        case 7: 
            result.push((head === tail) ? -1 : list[head]);
            break;
        case 8: 
            result.push((head === tail) ? -1 : list[tail-1]);
            break;

        default: break;

            
    }
    
}

console.log(result.join("\n"));