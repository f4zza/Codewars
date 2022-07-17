// In mathematics, a function is a relation between a set of inputs and a set of permissible outputs with the property that each input is related to exactly one output. In other words, for every x from the set of inputs there is exactly one element y from the set of outputs, such that the ordered pair (x, y) is contained in the set defining the function.
// You are given a set of pairs that defines something. Your task is to figure out whether this something can be a function or not.
// Input/Output
//     [input] 2D float array pairs
// A non-empty set of pairs. Each pair is given as a two-element array, where the first element belongs to the set of inputs, and the second one belongs to the set of outputs.
//     [output] a boolean value
// true if the given set can define a function and false otherwise.

function isFunction(pairs) {
    return new Set(pairs.map(p=> p[0])).size == new Set(pairs.map(String)).size  
  }