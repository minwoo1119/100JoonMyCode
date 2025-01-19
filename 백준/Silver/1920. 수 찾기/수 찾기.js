const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const numA = +input.shift();
const numsA = new Set(input.shift().split(' ').map(Number));
const numB = +input.shift();
const numsB = input.shift().split(' ').map(Number);

const result = numsB.map((num) => (numsA.has(num) ? 1 : 0));
console.log(result.join('\n'));
