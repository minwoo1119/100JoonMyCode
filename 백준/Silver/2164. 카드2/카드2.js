const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const num = +input;
const queue = Array.from({ length: num }, (_, i) => i + 1);

let front = 0;

while (queue.length - front > 1) {
	front++;
	queue.push(queue[front]);
	front++;
}

console.log(queue[front]);
