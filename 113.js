// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".

function scale(strng, k, n) {
    return strng
      .replace(/[^\n]/g, c=> Array(k+1).join(c))
      .replace(/[^\n]+/g, c=> Array(n+1).join("\n"+c).slice(1))
 }