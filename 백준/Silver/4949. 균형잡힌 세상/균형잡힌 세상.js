const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const results = [];

input.forEach((line) => {
	if (line === '.') return;
	const stack = [];
	let isBalanced = true;

	for (const char of line) {
		if (char === '(' || char === '[') {
			stack.push(char);
		} else if (char === ')') {
			if (stack.pop() !== '(') {
				isBalanced = false;
				break;
			}
		} else if (char === ']') {
			if (stack.pop() !== '[') {
				isBalanced = false;
				break;
			}
		}
	}

	if (isBalanced && stack.length === 0) {
		results.push('yes');
	} else {
		results.push('no');
	}
});

console.log(results.join('\n'));
