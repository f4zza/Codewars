// Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.

function racePodium(blocks) {
    if(blocks == 7) return [2, 4, 1]
    let second = Math.ceil(blocks/3)
    return [second, second + 1, blocks - second*2 - 1]
  }
  