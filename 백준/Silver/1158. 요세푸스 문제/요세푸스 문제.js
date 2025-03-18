const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(/,| |\n/);

const n = Number(input[0]);
const k = Number(input[1]);
const result = [];

const arr = Array.from({ length: n }, (v, i) => i + 1);
const firstlength = arr.length;

let idx = (k - 1) % arr.length;

while (arr.length > 0) {
	result.push(arr.splice(idx, 1)[0]);
	if (arr.length > 0) idx = (idx + k - 1) % arr.length;
}

console.log(`<${result.join(", ")}>`);
