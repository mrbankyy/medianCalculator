function medianPrime(n) {
    const prime = [];
  
    // check for prime numbers
    for (let i = 2; i < n; i++) {
      let isPrime = true;
  
      // check if i is divisible by any number from 2 to i-1
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      // if i is prime, add it to the prime array 
      if (isPrime) {
        prime.push(i);
      }
    }
  
    // sort the prime array in ascending order
    prime.sort((a, b) => a - b);
  
    // find the median index of the prime array
    const medianIndex = Math.floor(prime.length / 2);
  
    // check the length of median
    if (prime.length % 2 === 0) {
      const median1 = prime[medianIndex - 1]; 
      const median2 = prime[medianIndex];
          
      // display an array if more than 2 medians
      if (median1 === median2) {
        return {prime, median: [median1]};
      } else {
        return {prime, median: [median1, median2]};
      }
    } else {
      // return middle number if length is odd
      const median = prime[medianIndex]; 
      return {prime, median: [median]};
    }
}
  
module.exports = medianPrime;

  