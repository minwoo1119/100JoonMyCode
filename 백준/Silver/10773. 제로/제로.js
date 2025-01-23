const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const num = input.shift();

const stack = [];
input.forEach((ele) => {
	ele = +ele;
	if (ele === 0) {
		stack.pop();
	} else {
		stack.push(ele);
	}
});

let result = 0;

stack.forEach((ele) => {
	result += ele;
});

console.log(result);
