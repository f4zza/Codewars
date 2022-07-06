// The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

function span(arr, predicate) {
    for (var i=0;i<arr.length;i++){
      if(!predicate(arr[i])) break
    }
    return [arr.slice(0, i), 
            arr.slice(i)]
  }