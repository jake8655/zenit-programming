if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str: any, newStr: any) {
    let modifiedStr = this;
    while (modifiedStr.includes(str)) {
      modifiedStr = modifiedStr.replace(str, newStr);
    }
    return modifiedStr as string;
  };
}

process.stdin.setEncoding('utf8');

import { readlineSync } from './utils';

const convert = (char: string) => {
  switch (char) {
    case '(':
      return ')';
    case ')':
      return '(';
    case '<':
      return '>';
    case '>':
      return '<';
    default:
      return char;
  }
};

const findSolution = (pieces: string[], numberOfPieces: number) => {
  if (
    pieces[0]![0] === '(' &&
    pieces[numberOfPieces - 1]![pieces[numberOfPieces - 1]!.length - 1] === ')'
  )
    return 'dazdovka';

  if (
    pieces[0]![0] === '>' ||
    pieces[numberOfPieces - 1]![pieces[numberOfPieces - 1]!.length - 1] === '<'
  )
    return 'had';
};

const main = async () => {
  const numberOfPieces = +(await readlineSync());
  const pieces = [];

  for (let i = 0; i < numberOfPieces; i++) {
    pieces.push(await readlineSync());
  }

  const solution = findSolution(pieces, numberOfPieces);
  if (solution) return console.log(solution);

  console.log('---------------------------');

  // Cannot do it like this because we need to reverse the first part then undo and reverse the second part, 3rd part, then try the 1st and 2nd simultaneously, 1st and 3rd...
  for (let i = 0; i < numberOfPieces; i++) {
    const convertedPiece = pieces[i]!.split('')
      // Cannot just convert the characters because (==) becomes )==( when it should stay
      .map((char: string) => convert(char))
      .join('') as string;
    pieces[i] = convertedPiece;

    console.log(pieces);
    const solution = findSolution(pieces, numberOfPieces);
    if (solution) {
      console.log(solution);
      break;
    }
  }
};

main();

// (================)     16
// (=======((=========).     7 + 9 = 16
