​
function isPrime(num) {
  if (num <= 1) return false; // Primes are greater than 1
  if (num <= 3) return true;  // 2 and 3 are primes
  if (num % 2 === 0 || num % 3 === 0) return false; // Eliminate multiples of 2 and 3
​
  // Check divisors from 5 to √num, skipping multiples of 2 and 3
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
​
  return true;
}