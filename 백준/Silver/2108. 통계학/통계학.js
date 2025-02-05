const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split(/,| |\n/);

const n = input.shift();
const arr = [...input.map(Number)];

const fixNegativeZero = (num) => (Object.is(num, -0) ? 0 : num);

// 산술평균
const result = arr.reduce((sum, currValue) => sum + currValue, 0);
const mean = fixNegativeZero(Math.round(result / arr.length));
console.log(mean);

// 중앙값
arr.sort((a, b) => a - b);
const mid = arr[Math.floor(arr.length / 2)]; // 올바른 중앙값 선택
console.log(mid);

// 최빈값
const freqMap = new Map();
let maxFreq = 0;
let mostFrequent = [];

for (let num of arr) {
	freqMap.set(num, (freqMap.get(num) || 0) + 1);
	maxFreq = Math.max(maxFreq, freqMap.get(num));
}

for (let [key, value] of freqMap) {
	if (value === maxFreq) {
		mostFrequent.push(key);
	}
}

mostFrequent.sort((a, b) => a - b);
const mode = mostFrequent.length > 1 ? mostFrequent[1] : mostFrequent[0];
console.log(mode);

// 최댓값과 최솟값 차이
const max = Math.max(...arr);
const min = Math.min(...arr);
const gap = max - min;
console.log(gap);
