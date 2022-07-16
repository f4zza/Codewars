// The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.
// Their first act in power is absolute wealth equality through coercive redistribution.
// Create a function that redistributes all wealth equally among all citizens.
// Wealth is represented as an array/list where every index is the wealth of a single citizen.
// The function should mutate the input such that every index has the same amount of wealth. 

function redistributeWealth(wealth) {
    wealth = wealth.fill((wealth.reduce(function (a,b){
      return a + b
    }))/wealth.length)
  }