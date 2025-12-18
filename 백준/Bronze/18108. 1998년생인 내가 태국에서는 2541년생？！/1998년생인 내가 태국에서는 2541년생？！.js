const fs = require("fs");

const year = fs.readFileSync("/dev/stdin").toString().trim();
console.log(Number(year) - 543);
