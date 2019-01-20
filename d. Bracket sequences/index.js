const generate = (n, open = 0, close = 0, acc = '') => {
  if ((open + close) === 2 * n) {
    return acc;
  }
  if (open < n) {
    return generate(n, open + 1, close, acc + '(');
  }
  if (open > close) {
    return generate(n, open, close + 1, acc + ')');
  }
};

const next = (seq) => {
  let close = 0;
  let open = 0;
  for (let i = seq.length - 1; i >= 0; i--) {
    if (seq.charAt(i) === '(') {
      open++;
      if (close > open) {
        break;
      }
    } else {
      close++;
    }
  }
  seq = seq.slice(0, seq.length - open - close);
  if (seq === '') {
    return null;
  } 
  seq += ')';
  for (let i = 1; i <= open; i++) {
    seq += '(';
  }
  for (let i = 1; i < close; i++) {
    seq += ')';
  }
  return seq;  
}

const lines = [];
process.stdin.on('data', line => lines.push(line));
process.stdin.on('end', () => {
  const n = Number(lines.toString());
  let current = generate(n);
  process.stdout.write(current);
  while (true) {
    current = next(current);
    if (null === current) {
      break;
    }
    process.stdout.write("\n" + current);
  }
})
