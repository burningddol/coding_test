const fs = require('fs');
const S = fs.readFileSync('/dev/stdin').toString().trim();

if(S.split(" ")[0])console.log(S.split(" ").length); else console.log(0);

