const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [baskets, changeCounts] = input[0].split(" ").map(Number);

const basketList = Array.from({length: baskets}, (_,i)=>i+1);
 
   

for(i=0; i<changeCounts; i++) {
   const temp = [...basketList];
   
    const [start,end] = input[i+1].split(" ").map(Number);
 
    let ttemp= 0;
    for(j=start-1; j<=end-1;j++) {
        basketList[j] = temp[end-1-ttemp];
        ttemp++;
   }
    
     
    

    
}
 console.log(basketList.join(" "));



