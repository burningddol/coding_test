const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 예시 파싱
const [basketsCount, mixingCount] = input[0].split(" ").map(Number);

const baskets = Array.from({ length: basketsCount }, (_, i) => i + 1);
const changingInfo = [];

for(i=1;i<=mixingCount; i++){
    changingInfo[i - 1] = input[i].split(" ").map(Number);
}



for(i=0;i<mixingCount;i++){
    const prevBaskets = [...baskets];
    baskets[changingInfo[i][0]-1] = prevBaskets[changingInfo[i][1]-1];
    baskets[changingInfo[i][1]-1] = prevBaskets[changingInfo[i][0]-1];    
}
console.log(baskets.join(" "));