const string = process.argv[2];
//console.log(string);


const array = string.split (',');
//console.log(array);

let sum =0;
const numbers = [];
for (let i = 0; i < array.length; i++) {
    const candidate = array[i]; 
    const number = parseInt(candidate,10);
    numbers.push(number);
    sum += numbers[i];
}
//console.log(numbers);
console.log(sum);


