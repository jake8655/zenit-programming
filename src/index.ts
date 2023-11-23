import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const megaphones = input[1]!.split(' ').map(val => +val);

const result: number[] = [];

for (let i = 0; i < megaphones.length; i++) {
  let sum = 1;

  for (let j = 0; j < megaphones.length; j++) {
    if (i === j) continue;
    sum *= megaphones[j]!;
  }

  result.push(sum);
}

console.log(result.join(' '));
