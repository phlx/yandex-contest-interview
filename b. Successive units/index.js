const readline = require('readline');

const input = () => new Promise((resolve, reject) => {
  const lines = [];
  readline
    .createInterface({input: process.stdin})
    .on('line', (line) => lines.push(line))
    .on('close', () => resolve(lines));
});

const output = stringable => process.stdout.write(stringable.toString());

const run = async () => {
  const lines = await input();
  
  const length = Number(lines[0]);
  const bits = lines.slice(1);

  let current = 0;
  let last = 0;

  for (let i = 0; i < length; i++) {
    const num = Number(bits[i]);
    if (num === 0) {
      last = (last > current) ? last : current;
      current = 0;
    } else {
      ++current;
    }
  }

  output(last > current ? last : current);
};

run();
