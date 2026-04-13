const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");


const length = input.length;

const cache = {};

function w(a,b,c){
    const key = `${a} ${b} ${c}`;
    if(cache[key]) return cache[key];
    
    if(a<=0 || b<=0 || c<=0) {cache[key]=1; return cache[key];};

    if(a>20 || b>20 || c >20 ) {cache[key]=w(20,20,20); return cache[key];};

    if(a<b && b<c) {
        cache[key] = (w(a,b,c-1) + w(a,b-1,c-1) - w(a,b-1,c));
        return cache[key]; }

    cache[key] = (w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1));
    return  cache[key];
    
    
}

for(i=0;i<length-1;i++){

    const [a,b,c]=input[i].split(" ").map(Number);
    


console.log(`w(${a}, ${b}, ${c}) = ${w(a,b,c)}`);
}