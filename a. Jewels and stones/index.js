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
  
  const [jewels, stones] = lines;
  let result = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones.charAt(i))) {
      ++result;
    }
  }

  output(result);
};

run();
