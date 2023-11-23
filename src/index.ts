import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const replacementNames = input[1]!.split(' ');
const sheepArr = input
  .slice(2)
  .map(row => row.split('').map(val => +val || '.')) as (number | string)[][];

const renamedSheep = sheepArr.map(row => {
  return row.map(val => {
    if (val === '.') {
      return '.';
    }
    return replacementNames[(val as number) - 1];
  });
});

const result = renamedSheep.map(row => row.join('')).join('\n');
console.log(result);
