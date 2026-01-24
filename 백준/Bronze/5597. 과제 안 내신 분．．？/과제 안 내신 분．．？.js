const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);
const studentsIndex = Array.from({ length: 30 }, (_, i) => i+1);

for(const a of input) {

    for(i=0;i<30;i++){
        if(studentsIndex[i]===a) studentsIndex.splice(i, 1);
    }
    
}

console.log(studentsIndex.sort((a,b)=>a-b).join(" "));