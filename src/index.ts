import fs from 'fs';

const main = async () => {
  const input = fs.readFileSync('/dev/stdin').toString().split('\n');
  input.shift();
  let final = 0;

  input.forEach(v => {
    final += +v;
  });

  console.log(final);
};

main();
