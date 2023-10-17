import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const costs = input[1]!.split(' ').map(val => +val);

const result = costs.reduce((acc, _, idx) => {
  const newArr = [...costs];
  newArr.splice(idx, 1);
  acc.push(newArr.reduce((acc2, val2) => acc2 + val2, 0));
  return acc;
}, new Array<number>());

console.log(result.join('\n'));
