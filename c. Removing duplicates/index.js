const readline = require('readline');

const processing = () => new Promise((resolve, reject) => {
  let length = null;
  const dict = {};

  readline
    .createInterface({input: process.stdin})
    .on('line', (line) => {
      const current = Number(line);
      if (length === null) {
        length = current;
        return;
      }
      if (length-- === 0) {
        return;
      }
      if (dict.hasOwnProperty(current)) {
        ++dict[current];
      } else {
        dict[current] = 1;
      }
    })
    .on('close', () => resolve(Object.keys(dict).join("\n")));
});

const output = stringable => process.stdout.write(stringable.toString());

const run = async () => {
  const result = await processing();
  
  output(result);
};

run();
