process.stdin.setEncoding('utf8');

import { readlineSync } from './utils';

const convert = {
  Vlavo: 'Dolava',
  Vpravo: 'Doprava',
};

const main = async () => {
  const input = await readlineSync();
  const sentences = input
    .split(/\.\ /s)
    .map(sentence => sentence.replace('.', ''));
  const advices = sentences
    .map(sentence => {
      const words = sentence.split(' ');
      return [
        convert[words[0] as keyof typeof convert],
        words[words.length - 1],
      ];
    })
    .filter(advice => advice[1] !== 'drak') as [string[]];

  const output = advices[0].join(', lebo je tam ');
  console.log(`${output}!`);
};

main();
