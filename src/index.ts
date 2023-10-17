import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const costs = input[1]!.split(' ').map(val => +val);

const result = costs.reduce((acc, _, idx) => {
  acc.push(
    costs.reduce((acc2, val2, idx2) => {
      if (idx2 === idx) return acc2;
      return acc2 + val2;
    }, 0),
  );
  return acc;
}, new Array<number>());

console.log(result.join('\n'));
