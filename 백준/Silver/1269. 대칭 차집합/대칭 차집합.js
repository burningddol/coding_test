const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


const A = input[1].split(" ").map(Number);

const B = input[2].split(" ").map(Number);

const AMap = new Map;
const BMap = new Map;

A.forEach((a)=>{
    AMap.set(a,1);
})

B.forEach((b)=>{
    BMap.set(b,1);
})

A.forEach((a)=> {
    if(BMap.has(a)) BMap.delete(a);
        });

B.forEach((b)=> {
    if(AMap.has(b)) AMap.delete(b);
        });



console.log(BMap.size + AMap.size);