import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const shirts = input[1]!.split(' ');

const combinations: number[] = [];

for (let i = 0; i < shirts.length; i++) {
  const different = new Set<string>([shirts[i]!]);
  const sequence: string[] = [shirts[i]!];

  for (let j = i + 1; j < shirts.length; j++) {
    if (different.size > 2) {
      different.clear();
      sequence.pop();
      break;
    }

    different.add(shirts[j]!);
    sequence.push(shirts[j]!);
  }

  if (different.size <= 2) {
    combinations.push(sequence.length);
  }
}

const maxCombination = Math.max(...combinations);

console.log(maxCombination);
