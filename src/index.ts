process.stdin.setEncoding('utf8');

import { readlineSync } from './utils';

const main = async () => {
  const a = await readlineSync();
  const b = await readlineSync();
  console.log(+a + +b);
};

main();
