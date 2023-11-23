import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [, flavorsPerDay] = input[0]!.split(' ').map(val => +val) as [
  number,
  number,
];
const likeness = input[1]!.split(' ').map(val => +val);

let groups: number[][] = [];

if (likeness.length % flavorsPerDay === 0) {
  for (let i = 0; i < likeness.length; i++) {
    const group: number[] = [];
    for (let j = i; j < i + flavorsPerDay; j++) {
      group.push(likeness[j]!);
    }
  }
} else {
  for (let i = 0; i < likeness.length; i++) {
    const group: number[] = [];
    for (let j = i; j < i + flavorsPerDay; j++) {
      if (j > likeness.length) {
        group.push(likeness[j - likeness.length]!);
        break;
      }
      group.push(likeness[j]!);
    }
    groups.push(group);
  }
}

groups = groups.filter(group => {
  group = group.filter(Boolean);
  return group.length === flavorsPerDay;
});

const maxGroups = groups.map(group => {
  return Math.max(...group);
});

console.log(maxGroups.join(' '));
