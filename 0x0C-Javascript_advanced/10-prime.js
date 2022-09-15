function countPrimeNumbers() {
    let num_prime = [];
    for (let i = 2; i < 100; i++) {
        if (i % 2 != 0)
            num_prime.push(i);
    }
    return num_prime;
  }
  const init = performance.now()
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  const end = performance.now()
  console.log(`Execution time of calculating prime numbers 100 times was ${end - init} milliseconds.`)