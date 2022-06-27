// Your task is to write a function which returns the sum of following series upto nth term(parameter).


function SeriesSum(n){
    let sum = 0
    for (let i=0; i < n; i++){
      sum += 1/(i*3 +1)
    }
return sum.toFixed(2)
}