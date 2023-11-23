import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [, flavorsPerDay] = input[0]!.split(' ').map(val => +val) as [
  number,
  number,
];
const likeness = input[1]!.split(' ').map(val => +val);

const groups: number[][] = [];

let bad = false;
for (let i = 0; i < likeness.length; i++) {
  const group: number[] = [];
  for (let j = i; j < i + flavorsPerDay; j++) {
    if (j >= likeness.length) {
      bad = true;
      break;
    }
    group.push(likeness[j]!);
  }
  if (bad) break;
  groups.push(group);
}

const maxGroups = groups.map(group => {
  return Math.max(...group);
});

console.log(maxGroups.join(' '));
