/**
 * Typescript Fibonacci sequence number with memorization example
 */

const fibonacci = (n, memo = {}) => {
  if (n === 1) {
    return [0, 1];
  } else {
    memo[n] = fibonacci(n - 1, memo);
    memo[n].push(memo[n][memo[n].length - 1] + memo[n][memo[n].length - 2]);
    return memo[n];
  }
}

console.log(fibonacci(50));


