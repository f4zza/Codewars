// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    return bool == true ? `Yes` : `No`
  } //my solution

 
  //learnt after looking at solution

  function boolToWord( bool ){
    return bool ? `Yes` : `No`
  } 