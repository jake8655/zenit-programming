import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split('\n')[0] as string;

const nePart = input.split('-')[0];
const numberOfNe = nePart!.split('ne');
console.log((numberOfNe.length - 1) % 2 === 0 ? 'ano' : 'nie');
