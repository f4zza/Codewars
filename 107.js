// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

function sortMyString(S) {
    let even = S.split('').filter((x,i)=> i%2===0).join('')
    let odd= S.split('').filter((x,i)=> i%2 !== 0).join('')
    return `${even} ${odd}`
}