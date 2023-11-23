import fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.shift();
input.pop();
const menus = input.map(line => line.split(' ').map(num => +num));

const firstMenu = [...menus[0]!];
const secondMenu = [...menus[0]!];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < menus.length; j++) {
    if (firstMenu[i]! < menus[j]![i]!) {
      firstMenu[i] = menus[j]![i]!;
    }
    if (secondMenu[i]! > menus[j]![i]!) {
      secondMenu[i] = menus[j]![i]!;
    }
  }
}

const [first, second] = [firstMenu, secondMenu].map(menu =>
  menu.reduce((acc, cur) => acc + cur, 0),
) as [number, number];

console.log(first - second);
