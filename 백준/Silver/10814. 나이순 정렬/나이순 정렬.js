const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const num = +input[0];
const data = input.splice(1);

class Person {
	constructor(age, name, index) {
		this.age = age;
		this.name = name;
		this.index = 0;
	}
}

let persons = [];

data.map((ele, index) => {
	persons[index] = new Person(ele.split(' ')[0], ele.split(' ')[1]);
});


persons.sort((a, b) => a.age - b.age);

for (let i = 0; i < num; i++) {
	console.log(persons[i].age, persons[i].name);
}
