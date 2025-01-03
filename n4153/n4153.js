const input = require('fs').readFileSync('./input.txt').toString().split('\n');

function isPitag(nums) {
	nums.sort((a, b) => a - b);
	const [a, b, c] = nums;
	return a ** 2 + b ** 2 === c ** 2 ? 'right' : 'wrong';
}

for (let line of input) {
	if (line === '0 0 0') break;
	const nums = line.split(' ').map(Number);
	console.log(isPitag(nums));
}
