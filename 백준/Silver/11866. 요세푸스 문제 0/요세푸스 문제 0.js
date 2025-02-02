const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [n, k] = input[0].split(' ').map(Number);

const queue = Array.from({ length: n }, (_, i) => i + 1);
const result = [];

let index = 0;

while (queue.length > 0) {
	index = (index + k - 1) % queue.length;
	result.push(queue.splice(index, 1)[0]);
}

console.log(`<${result.join(', ')}>`);
