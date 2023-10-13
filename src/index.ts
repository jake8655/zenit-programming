import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString();
const lines = input.split('\n');

const [player1, player2] = lines[0]!.split(' ').map(num => +num);

const nums = lines[2]!.split(' ').map(num => +num);
const [player1Score, player2Score] = nums.reduce(
  (acc, cur) => {
    if (cur === player1) acc[0]++;
    if (cur === player2) acc[1]++;
    return acc;
  },
  [0, 0],
);

if (player1Score > player2Score) console.log('Jergus');
else if (player1Score < player2Score) console.log('Ema');
else console.log('remiza');
