const fs = require("fs");
const X = Number(fs.readFileSync(0, "utf8").trim());

let n = 1;

while ((n * (n + 1)) / 2 < X) n++;

const prev = ((n - 1) * n) / 2;   
const pos = X - prev;            

let numerator, denominator;

if (n % 2 === 1) {

  numerator = n - pos + 1;
  denominator = pos;
} else {

  numerator = pos;
  denominator = n - pos + 1;
}

process.stdout.write(`${numerator}/${denominator}`);