const isAnagram = (a, b) => {
  if (!a || !b || a.length !== b.length) {
    return false;
  }
  const length = a.length;
  const half = Math.floor(length / 2);
  for (let i = 0; i < half; i++) {
    if (a.charCodeAt(i) !== b.charCodeAt(length - i - 1)) {
      return false;
    }
  }
  return true;
}

const lines = [];
process.stdin.on('data', line => lines.push(line));
process.stdin.on('end', () => {
  const [a, b] = lines.toString()
    .split('\n')
    .map(line => line.trim());
  const result = isAnagram(a, b);
  process.stdout.write(result ? '1' : '0');
})
