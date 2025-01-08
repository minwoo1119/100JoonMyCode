const input = require('fs')
	.readFileSync('./input.txt')
	.toString()
	.trim()
	.split(/\s+/);
const n = input[0];
const numbers = input
	.slice(1)
	.map(Number)
	.sort((a, b) => a - b);
console.log(numbers.join('\n'));
