// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000


function getDivisorsCnt(n){
    let cnt = 1
    for (let i=0;i<n;i++){
      if(n%i==0){
        ++cnt
      }
    }
  return cnt
}