import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString();
const lines = input.split('\n');
const a = parseInt(lines[0]!);
const b = parseInt(lines[1]!);

console.log(+a + +b);
