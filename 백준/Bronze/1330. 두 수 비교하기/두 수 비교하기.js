const fs = require("fs");
let [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

if(A>B) console.log(">")
if(A<B) console.log("<")
if(A==B) console.log("==")