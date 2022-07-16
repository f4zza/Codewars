// The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.
// if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149
// Could you help him?
// Task
// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
// Should the last donation be a non positive number (<= 0) John wants us:
//     to return:
//         Nothing in Haskell, Elm
//         None in F#, Ocaml, Rust, Scala
//         -1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
//     or to throw an error (some examples for such a case):
//         IllegalArgumentException() in Clojure, Java
//         ArgumentException() in C#
//         echo ERROR in Shell
//         argument-error in Racket
//         std::invalid_argument in C++
//         ValueError in Python
// So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.

function newAvg(arr, newavg) {
    const donators = arr.length + 1
    let remaining = newavg * donators
    
    for (let donation of arr) {
      remaining -= donation
    }
  
    if (remaining > 0 ) return Math.ceil(remaining)
  
    throw 'Expected New Average is too low'
}