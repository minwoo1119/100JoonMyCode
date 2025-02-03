const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const n = Number(input[0]);

if (n === 0) {
	console.log(0);
	return;
}

let data = input
	.slice(1)
	.map(Number)
	.sort((a, b) => a - b);

const exclude = Math.round(n * 0.15);

data = data.slice(exclude, n - exclude);

const sum = data.reduce((acc, val) => acc + val, 0);
const average = Math.round(sum / data.length);

console.log(average);
