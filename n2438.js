const input = require('fs').readFileSync('./input.txt').toString();

for (let i = 1; i <= input; i++) {
	console.log('*'.repeat(i));
}
console.log('\n');
