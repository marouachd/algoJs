const string = process.argv[2];
const array = string.split(',');

let min = 0 ;
let max = array.length-1;

while (min <max ) {
     const temp = array[max];
     array[max]=array[min];
     array[min]=temp;
     min++;
     max--;
}
console.log(array);
