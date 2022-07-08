// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [newNumerator, newDenominator]
// example: [45, 120] --> [3, 8]

// All numerators and denominators will be positive integers.

function reduce(fraction){
    let g = abc(fraction[0], fraction[1])
    return [fraction[0]/g, fraction[1]/g]
}
  function abc(x, y){
    return y===0 ? x : abc(y, x%y)
  }