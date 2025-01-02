const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const count = input[0];
const numbers = input.slice(1).toString().split('');

let result = 0;

for (let i = 0; i < count; i++) {
	result += +numbers[i];
}

console.log(result);
