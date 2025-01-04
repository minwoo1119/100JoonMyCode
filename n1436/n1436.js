const input = require('fs').readFileSync('./input.txt').toString();

console.log(input);

const index = input - 1;

let list = [];

for (let i = 666; i < 3000000; i++) {
	if (String(i).includes('666')) list.push(i);
}

console.log(list[index]);
