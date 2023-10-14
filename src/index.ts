import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split('\n') as [
  string,
  string,
];

const [firstCapacity, secondCapacity] = input[0]
  .split(' ')
  .map(val => +val) as [number, number];
const [firstWeight, secondWeight, thirdWeight] = input[1]
  .split(' ')
  .map(val => +val) as [number, number, number];

const calculate = () => {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        if (
          i * firstWeight + j * secondWeight + k * thirdWeight <=
            firstCapacity &&
          (1 - i) * firstWeight +
            (1 - j) * secondWeight +
            (1 - k) * thirdWeight <=
            secondCapacity
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(calculate() ? 'Ano' : 'Nie');
