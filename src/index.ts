import fs from 'fs';

const input = fs.readFileSync('input').toString().split('\n');

const n = +input[0]!;
const [on, off] = [
  input[2]!
    .split(' ')
    .filter(Boolean)
    .map(val => +val),
  input[4]!
    .split(' ')
    .filter(Boolean)
    .map(val => +val),
];
const max = +input[5]!;
const result: number[][] = [];

for (let all = 0; all < 2; all++)
  for (let even = 0; even < 2; even++)
    for (let odd = 0; odd < 2; odd++)
      for (let mod7 = 0; mod7 < 2; mod7++) {
        // Skip if the number of buttons pressed is greater than the max
        if (all + even + odd + mod7 > max) continue;

        // Check if the number of buttons pressed's parity is the same as the max's parity
        // If they are the same, the rest of the required buttons can just be 1 button n times
        // n = max - (all + even + odd + mod7)
        // If the below statement is true, then n is even, otherwise it is odd and the aforementioned strategy cannot be used
        if ((all + even + odd + mod7) % 2 !== max % 2) continue;

        // Create an array of n lights, all set to the same value depending on if the 'all' button was pressed
        const lights = new Array<number>(n).fill(+(all === 0));

        // Set the lights to the correct status based on if the buttons were pressed
        if (even)
          for (let i = 1; i < lights.length; i += 2)
            lights[i] = lights[i] === 1 ? 0 : 1;
        if (odd)
          for (let i = 0; i < lights.length; i += 2)
            lights[i] = lights[i] === 1 ? 0 : 1;
        if (mod7)
          for (let i = 6; i < lights.length; i += 7)
            lights[i] = lights[i] === 1 ? 0 : 1;

        // Check if the lights are in the correct state
        let ok = true;
        for (let i = 0; i < on.length; i++) {
          if (!lights[on[i]! - 1]) ok = false;
        }
        for (let i = 0; i < off.length; i++) {
          if (lights[off[i]! - 1]) ok = false;
        }

        if (ok) result.push(lights);
      }

// console.log(result);
console.log(result.map(lights => lights.join('')).join('\n'));
