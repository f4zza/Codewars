// Your job is to list all of the numbers up to 2 ** n - 1 that contain a 1 at the same places/bits as the binary representation of b.b will be 1,2,4,8,etc.
// For example: solution(4,2) would return [2,3,6,7,10,11,14,15].

function solution(n, b) {
    return Array.from({length: 2**n}, (_,i)=> i).filter(element=> element & b)
  }
  