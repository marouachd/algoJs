const input = process.argv[2];
const numbers = input.split(',');

let numberRepeated = 0;
let combo = false;

for (let i = 0; i <= 4; i++) {
    let temp = 0;
    for (let j = 0; j <= 4; j++) {
        if (numbers[i] == numbers[j] &&
            numbers[j] == numbers[j - 1] && numbers[j] == numbers[j + 1]) {
            temp++
            combo = true
        } else if (numbers[i] == numbers[j]) {
            temp++
        }
        if (temp >= 3) {
            numberRepeated = numbers[i]
        }
    }
    if (numberRepeated != 0 && combo) {
        console.log(`Le nombre ${numberRepeated} apparait 3 fois de suite!`);
    } else if (numberRepeated != 0) {
        console.log(`Le nombre ${numberRepeated}  apparait 3 fois`);
    }
    else console.log(`Aucun nombre n'apparait 3 fois`);
}
