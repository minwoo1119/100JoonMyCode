const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
const values = input.slice(1);
const data = values.map((ele) => ele.split(' ').map(Number));

class Person {
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
        this.rank = 1;
    }
}

const personInfo = data.map(([weight, height]) => new Person(weight, height)); // Person 객체 생성

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
