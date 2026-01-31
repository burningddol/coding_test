const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');



const Score =  {
    "A+": 4.5, "A0": 4, "B+": 3.5, "B0": 3, "C+": 2.5, "C0": 2, "D+": 1.5, "D0": 1, "F": 0,
};

let gpa = 0;

let sum = 0;

for(i=0; i<20; i++){

    const subject = input[i].trim().split(" ");

    if(subject[2] === "P") continue;

    gpa += Number(subject[1]);
    sum += Number(subject[1])* Score[subject[2]];
    
    
}

console.log(sum/gpa);