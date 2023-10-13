import fs from 'fs';

const whole_input = fs.readFileSync('/dev/stdin').toString();
const input_lines = whole_input.split('\n');
const nums = input_lines[1]!.split(' ').map(Number);

console.log(nums.reduce((a, b) => a + b, 0));
