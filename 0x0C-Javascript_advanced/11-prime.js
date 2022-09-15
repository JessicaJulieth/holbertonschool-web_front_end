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
    setTimeout(function() {
     countPrimeNumbers();
  },1000);
}

const end = performance.now()
console.log("Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds.");