// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    return Array(num).fill(1).map((x,i)=> x=1+i).reduce((a,b)=> a+b,0)
 }