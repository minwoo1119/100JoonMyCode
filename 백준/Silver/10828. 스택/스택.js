const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const num = +input.shift();
const stack = [];
const result = [];

input.forEach((sentence) => {
	const [command, value] = sentence.split(' ');

	if (command === 'push') {
		stack.push(Number(value));
	} else if (command === 'pop') {
		result.push(stack.length === 0 ? -1 : stack.pop());
	} else if (command === 'size') {
		result.push(stack.length);
	} else if (command === 'empty') {
		result.push(stack.length === 0 ? 1 : 0);
	} else if (command === 'top') {
		result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
	}
});

console.log(result.join('\n'));
