const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(' ');

const M = Number(input[0]);
const N = Number(input[1]);

const isPrime = Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
	if (isPrime[i]) {
		for (let j = i * i; j <= N; j += i) {
			isPrime[j] = false;
		}
	}
}

const result = [];
for (let i = M; i <= N; i++) {
	if (isPrime[i]) {
		result.push(i);
	}
}

console.log(result.join('\n'));
