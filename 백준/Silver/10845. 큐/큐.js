const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const num = +input.shift();
const queue = [];
const result = [];

input.forEach((sentence) => {
	const [command, value] = sentence.split(' ');

	if (command === 'push') {
		queue.push(Number(value));
	} else if (command === 'pop') {
		result.push(queue.length === 0 ? -1 : queue.shift());
	} else if (command === 'size') {
		result.push(queue.length);
	} else if (command === 'empty') {
		result.push(queue.length === 0 ? 1 : 0);
	} else if (command === 'front') {
		result.push(queue.length === 0 ? -1 : queue[0]);
	} else if (command === 'back') {
		result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
	}
});

console.log(result.join('\n'));
