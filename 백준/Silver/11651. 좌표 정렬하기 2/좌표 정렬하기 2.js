const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const num = +input[0];
const data = input.slice(1).map((line) => {
	const [x, y] = line.split(' ').map(Number);
	return { x, y };
});

data.sort((a, b) => {
	if (a.y === b.y) {
		return a.x - b.x;
	}
	return a.y - b.y;
});

data.forEach((point) => console.log(point.x, point.y));
