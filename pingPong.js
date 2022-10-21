const string = process.argv[2];
const array = string.split(',');

let pings =0;
let pongs =0;

for (let i = 0; i < array.length ; i++) {
    if (array[i] == "ping") {
        pings++
    }
   else pongs++ 
}
console.log(pings);
console.log(pongs);