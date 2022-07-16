// Calculate how many times a number can be divided by a given number.

const divisions = (n, divisor) => {
    return Math.floor(Math.log(n)/Math.log(divisor))
  };