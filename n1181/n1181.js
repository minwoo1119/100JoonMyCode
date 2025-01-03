const input = require('fs').readFileSync('./input.txt').toString().split('\n');

function defaultSort(a, b) {
	return a.localeCompare(b);
}

function compareByLength(a, b) {
	if (a.length > b.length) {
		return 1;
	} else if (a.length == b.length) {
		return defaultSort(a, b);
	} else {
		return -1;
	}
}

const words = input.slice(1).filter((word) => word.trim() !== '');
const uniqueArr = Array.from(new Set(words));
uniqueArr.sort(compareByLength);
uniqueArr.forEach((word) => {
	console.log(word);
});
