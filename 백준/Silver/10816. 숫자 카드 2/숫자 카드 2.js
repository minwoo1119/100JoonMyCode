const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const num = input.shift();
const data = input
	.shift()
	.split(' ')
	.map(Number)
	.sort((a, b) => a - b);

var hashMap = new Map();

data.forEach((value) => {
	hashMap.set(value, (hashMap.get(value) || 0) + 1);
});


const reqDataNum = input.shift();

const reqData = input.shift().split(' ').map(Number);

const result = reqData.map((num) => hashMap.get(num) || 0);

console.log(result.join(' '));
