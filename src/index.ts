import fs from 'fs';

const input = fs.readFileSync('input').toString().split('\n');
const n = +input[0]!.split(' ')[0]!;
const k = +input[0]!.split(' ')[1]!;
const x = k === 100 ? -1 : n / (1 - k / 100);
console.log(x);
