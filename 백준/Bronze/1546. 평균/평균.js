const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const subjects = Number(input[0]);

const scores = input[1].split(" ").map(Number);

const maxScore = Math.max(...scores);

let sum = 0;
for(const score of scores) {
   sum += score/maxScore*100;
}

console.log(sum/subjects);
