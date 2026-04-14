const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const word = input[0];

const length = word.length;

const set = new Set();

let temp = "";


for(i=0;i<length;i++){

    let j = i;
    
    while(j <= length-1){
        temp = word.slice(i,j+1);
        set.add(temp);
        j++;
        
        
    }

}


console.log(set.size);