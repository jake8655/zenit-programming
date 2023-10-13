process.stdin.setEncoding('utf8');

import { readlineSync } from './utils';

const main = async () => {
  const [firstCapacity, secondCapacity] = (await readlineSync())
    .split(' ')
    .map(Number) as [number, number];
  const items = (await readlineSync()).split(' ').map(Number);

  let [firstCapacityCopy, secondCapacityCopy] = [firstCapacity, secondCapacity];
  for (const item of items) {
    firstCapacityCopy -= item;
    if (firstCapacityCopy < 0) {
      firstCapacityCopy += item;
      secondCapacityCopy -= item;
      if (secondCapacityCopy < 0) {
        console.log('Nie');
      }
    }
  }
};

main();
