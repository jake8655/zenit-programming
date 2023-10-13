process.stdin.setEncoding('utf8');

import { readlineSync } from './utils';

const main = async () => {
  const numberOfMoves = +(await readlineSync());
  let final = 0;

  for (let i = 0; i < numberOfMoves; i++) {
    const move = +(await readlineSync());
    final += move;
  }

  console.log(final);
};

main();
