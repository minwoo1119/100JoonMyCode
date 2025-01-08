const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const num = input[0];
const values = input.splice(1);
const data = values.map((ele) => {
	return ele.split(' ');
});

class Person {
	height;
	weight;
	rank;
	constructor(h, w) {
		this.height = h;
		this.weight = w;
		this.rank = 1;
	}
}

const personInfo = [];
for (let i = 0; i < num; i++) {
	personInfo[i] = new Person(data[i][0], data[i][1]);
}

for (let i = 0; i < num; i++) {
	for (let j = 0; j < num; j++) {
		if (i !== j) {
			if (
				personInfo[i].weight < personInfo[j].weight &&
				personInfo[i].height < personInfo[j].height
			) {
				personInfo[i].rank++;
			}
		}
	}
}

console.log(personInfo.map((person) => person.rank).join(' '));
