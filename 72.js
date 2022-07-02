// Write a method, that replaces every nth char oldValue with char newValue.



function replaceNth(text, n, oldValue, newValue) {
    let count=0  
    if(n <0){
        return text
      }
      return text.split('').map(function(item, index){
                if (item === oldValue){
        count++
      } 
        if(item === oldValue && count % n === 0){
          return newValue
        }
        else{
          return item
        }
                                }).join('')
  }